import React, {useState} from 'react';
import './NewEmployee.css'
import EmployeeForm from './EmployeeForm';

const NewExmployee = (props)=>{

    const [isEditingEmployee, setIsEditingEmployee] = useState(false)

    //save the data from the form 
    const saveEmployeeDataHandler = (formEnteredEmployeeData)=>{
        const employeeData = {
            ...formEnteredEmployeeData,
            id: Math.random().toString()
        }

        props.onAddEmployee(employeeData)

        setIsEditingEmployee(false)
    }

    const startEditingHandler = ()=>{
        setIsEditingEmployee(true)
    }

    const stopEdidingHandler = ()=>{
        setIsEditingEmployee(false);
    }
    //the button check if editing falso show the button otherwise show the form
    return(
        <div className='new-employee'>
        {!isEditingEmployee && <button onClick={startEditingHandler}>Add New Employee</button>}
         {isEditingEmployee &&  <EmployeeForm onSaveEmployeeData ={saveEmployeeDataHandler} onCancelForm={stopEdidingHandler}/>}
        </div>
    )
}

export default NewExmployee;