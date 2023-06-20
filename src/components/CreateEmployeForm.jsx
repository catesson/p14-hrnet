import React, { useState } from "react";
import "../styles/employee-form.css";
import { DateInput } from "./DateInput";
import { DropDown } from "flexidropdown";
import { Dialog } from "primereact/dialog";

import { states } from "../data/states";

export function CreateEmployeFrom() {
  const [visible, setVisible] = useState(false);
  const saveEmployee = () => {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const dateOfBirth = document.querySelector("#date-birth input");
    const startDate = document.querySelector("#date-start input");
    const department = document.getElementById("department");
    const street = document.getElementById("street");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zipCode = document.getElementById("zip-code");

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };
    employees.push(employee);

    localStorage.setItem("employees", JSON.stringify(employees));
  };
  const handleClickFormButton = (event) => {
    event.preventDefault();
    setVisible(true);
    saveEmployee();
  };
  return (
    <div className="employee-form">
      <form action="#" id="create-employee">
        <div className="label-input">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="label-input">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="label-input" id="date-birth">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <DateInput id="date-of-birth" />
        </div>
        <div className="label-input" id="date-start">
          <label htmlFor="start-date">Start Date</label>
          <DateInput id="start-date" />
        </div>
        <fieldset className="address">
          <h3>Address</h3>
          <div className="label-input">
            <label htmlFor="street">Street</label>
            <input id="street" type="text" />
          </div>
          <div className="label-input">
            <label htmlFor="city">City</label>
            <input id="city" type="text" />
          </div>
          <div className="label-input">
            <label htmlFor="state">State</label>
            <DropDown option={states} optionValue="name" placeholder="test" id="state"  colorClass="red-style"/>
          </div>
          <div className="label-input">
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </div>
        </fieldset>
        <div>
          <label htmlFor="department">Department</label>
          <DropDown option={[{"name" : "Sales"}, {"name" :"Marketing"}, {"name" :"Engineering"}, {"name" :"Human Ressources"}, {"name" :"Legale"}]} optionValue="name" defaultValue="Sales" id="Department"  colorClass="red-style"/>
        </div>
      </form>
      <button className="button" onClick={handleClickFormButton}>
        Save
      </button>
      <Dialog
        header="Header"
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">Employee are create !</p>
      </Dialog>
    </div>
  );
}
