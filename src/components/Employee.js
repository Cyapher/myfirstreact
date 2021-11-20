import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import employeeService from "../services/employeeService"


const Employee = () =>{
    const[employees, setEmployees] = useState([])

    useEffect(
        () =>{
            employeeService.getEmployees() //promise
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                console.log("ahhh sarado")
            )
        }
    )

    return(
        <div>
            <h1>List of Employees</h1>
            <div>
                <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Location</td>
                    <td>Department</td>
                </tr>
                {
                    employees.map(
                        employee => (
                            <tr> 
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                            </tr>
                        )
                    )
                }
                </table>
            </div>
        </div>
    )
}

export default Employee