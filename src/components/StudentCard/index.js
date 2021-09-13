import "./style.css";
function StudentCard({ students }) {
  return (
    <div className={"card " + students.house}>
      <img src={students.image} alt="studentsPotter" />
      <h3>{students.name}</h3>
      <p>{students.house}</p>
      <small>{students.actor}</small>
    </div>
  );
}
export default StudentCard;
