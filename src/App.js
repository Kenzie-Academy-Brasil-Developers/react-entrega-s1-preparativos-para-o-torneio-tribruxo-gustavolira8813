import "./App.css";
import { useEffect, useState } from "react";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState([]);
  const [list, setList] = useState([]);
  const [start, setStart] = useState(true);
  const [box, setBox] = useState(false);
  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudents(response))
      .catch((err) => console.log(err));
  }, []);

  const random = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const randomCards = () => {
    let listComplete = [...students];
    let three = [];
    for (let i = 0; i < 3; i++) {
      let student = listComplete[random(0, listComplete.length)];
      let house = student.house;
      three.push(student);
      listComplete = listComplete.filter((e) => e.name !== student.name);
      listComplete = listComplete.filter((e) => e.house !== house);
    }
    setList([...three]);
    console.log(list);
  };

  const initial = () => {
    randomCards();
    start === true ? setStart(false) : setStart(true);
    box === true ? setBox(false) : setBox(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className={start === true ? "start" : "hidden"}>
          <h2>Torneiro Tribruxo</h2>
          <button onClick={initial}>START</button>
        </div>
        <div className={box === true ? "containerr" : "hidden"}>
          <div className="box">
            {list.map((e, i) => (
              <StudentCard key={i} students={e} />
            ))}
          </div>
          <div className="btns">
            <button onClick={randomCards}>Try Again</button>
            <button onClick={initial}>Main Menu</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
