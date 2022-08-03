import React, {useState} from 'react';
import Description from './components/Expenses/Description';
import NewExmployee from './components/NewEmployee/NewEmployee';

const Dummy_employees = [
  {
      id: 'e1',
      name: 'Toiler John',
      gender: 'Male',
      position:'Software Dev',
      salary: 455.12,
      date: new Date(1994, 7, 14),
    },
    { 
      id: 'e2', 
      name: 'Moah Salah',
      gender: 'Male',
      position:'FullStack',
      salary: 458.12,
      date: new Date(1990, 2, 12) },
    {
      id: 'e3',
      name: 'Wilson Morais',
      gender: 'Male',
      position:'Project Manager',
      salary: 558.12,
      date: new Date(1991, 2, 28),
    },
    {
      id: 'e4',
      name: 'Lidia Jacinto',
      gender: 'Female',
      position:'FrontEnd Dev',
      salary: 300.12,
      date: new Date(1993, 5, 12),
    },
  ];
function App() {
  
  const [employees, setEmployees] = useState(Dummy_employees)

  const addEmployeeHandler = (employee)=>{
    // setEmployees([employee,...employees])//another way of add element to the list
    setEmployees((prevEmployee)=>{
        return [ employee, ...prevEmployee]
    })
  }

  return (
    <div>
      <NewExmployee onAddEmployee = {addEmployeeHandler}/>
      <Description employees={employees}/>
    </div>
  );
}

export default App;
