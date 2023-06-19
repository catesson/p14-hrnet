import { MyTable } from "../components/Grid";
export function Employee() {
const employeeData = localStorage.getItem("employees")
const employeeArrayData = JSON.parse(employeeData)
console.log(employeeArrayData)
  return (
    <div className="container">
        <div className="title">
        <h1>HRnet</h1>
        
      </div><MyTable data={employeeArrayData}/>
      <a href="/">View home page</a>
    </div>
  );
}
