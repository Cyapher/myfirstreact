import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";


const AddEmployee = () => {
    //variables
    //Add
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [department, setDepartment] = useState("");
    const navigate = useNavigate();
    const{employeeid} = useParams();
    const[error, setError] = useState("")

    //Submit
    const saveEmployee = (e) =>{
        e.preventDefault();

        if(name && location && department){
            setError("");

            if(employeeid){
                //update
                const employee = {employeeid, name, location, department};
                employeeService.putEmployee(employee) //promise

                //for a promise, there is .then() and .catch()
                .then(
                    response =>{
                        console.log("updated employee! Congrats", response.data)
                        navigate("/myfirstreact/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("big oof, id");
                    }
                )
            }

            else{
                //combine the 3 data
                //add employee
                const employee = {name, location, department};
                employeeService.postEmployee(employee) //promise

                //for a promise, there is .then() and .catch()
                .then(
                    response =>{
                        console.log("added new employee! Congrats", response.data)
                        navigate("/myfirstreact/employees");
                    }
                )
                .catch(
                    error => {
                        console.error("big oof, walang id");
                    }
                )
            }
        }
        else{
            console.error("Oops! Employee cannot be placed. Please fill each entry...")
            setError("Oops! Employee cannot be placed. Please fill each entry...")
        }
    }

    useEffect(
        () =>{
            if(employeeid){
                employeeService.getEmployee(employeeid) //calls API
                .then(
                    employee =>{
                        setName(employee.data.department);
                        setLocation(employee.data.location);
                        setDepartment(employee.data.name);
                    }
                )
                .catch(
                    error =>{
                        console.error("something went wrong", error)
                    }
                )
            }
        }, []
    )

    return (
        <div className = "container">
            <h3>Add Employee</h3>
            <form>
                <div className="mb-3">
                    <label for="name" className="form-label">Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={name}
                    id="name"
                    placeholder="Add employee name..."
                    onChange={
                        (e) => { //"e" = event, anonymous function
                            setName(e.target.value)
                        }
                    }
                    />
                </div>
                <div className="mb-3">
                    <label for="location" className="form-label">Location:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={location}
                    id="location"
                    placeholder="Add employee location..."
                    onChange={
                        (e) => {
                            setLocation(e.target.value)
                        }
                    }/>
                </div>
                <div className="mb-3">
                    <label for="department" className="form-label">Department:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={department}
                    id="department"
                    placeholder="Add employee department..."
                    onChange={
                        (e) => {
                            setDepartment(e.target.value)
                        }
                    }/>
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={(e) => saveEmployee(e)}>Save</button>
                
                <p id="error">
                    {error && <p className="error">{error}</p>}  
                </p>
            </form>
        </div>
    )
}
export default AddEmployee;