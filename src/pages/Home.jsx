import { CreateEmployeFrom } from "../components/CreateEmployeForm";

export function Home() {
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <a href="/employee">View Current Employees</a>
        <h2>Create Employee</h2>
        <CreateEmployeFrom />
      </div>
    </div>
  );
}
