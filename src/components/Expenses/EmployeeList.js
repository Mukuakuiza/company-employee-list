import EmployeeDescription from "./EmployeeDesription";
import './EmployeeList.css';

const EmployeeList = (props)=>{
  if(props.employees.length === 0){
     return  <h2 className="employee-list__fallback ">No Employees found!...</h2>
  }
  
  return <ul className="employee-list">
        {props.employees.map((employee)=>( <EmployeeDescription key={employee.id} name={employee.name} gender={employee.gender} position={employee.position} salary={employee.salary} bornin={employee.date}/>))}
  </ul>
}

export default EmployeeList;