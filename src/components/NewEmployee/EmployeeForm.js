import React, {useState} from 'react'
import './EmployeeForm.css'

const EmployeeForm = (props)=>{

    const [enteredName, setEnteredName]= useState('')
    const [enteredPosition, setEnteredPosition]= useState('')
    const [enteredGender, setEnteredGender] = useState('')
    const [enteredSalary, setEnteredSalary] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const nameInputHandler = (e)=>{
        setEnteredName(e.target.value)
    }

    const positionInputHandler =(e)=>{
        setEnteredPosition(e.target.value);
    }

    const genderInputHandler = (e)=>{
        setEnteredGender(e.target.value)
    }

    const salaryInputHandler = (e)=>{
        setEnteredSalary(e.target.value)   
    }

    const dateInputHandler = (e)=>{
        setEnteredDate(e.target.value)
    }

    const formSubmitHandler = (e)=>{
            e.preventDefault();

        //creating obejct that we will hold all the form values
        const employeeData = {
            name: enteredName,
            position: enteredPosition,
            gender: enteredGender,
            salary: +enteredSalary,
            date: new Date(enteredDate)
        }

        props.onSaveEmployeeData(employeeData)

        //set the values to empty string after click submit 
        // for this to happens we need to use two way binding in whihc we need
        //to put value = to current state example value={enteredName}
        setEnteredName('')
        setEnteredDate('')
        setEnteredGender('')
        setEnteredPosition('')
        setEnteredSalary('')
    }

console.log(props.OnCancel)
    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-employee__controls'>
                <div className='new-employee__control'>
                    <label>Name</label>
                    <input type='text' value={enteredName} onChange={nameInputHandler}/>
                </div>

                 <div className='new-employee__control'>
                    <label>Position</label>
                    <input type='text' value={enteredPosition} onChange={positionInputHandler}/>
                </div>

                 <div className='new-employee__control'>
                    <label>Gender</label>
                    <input type='text' value={enteredGender} onChange={genderInputHandler}/>
                </div>

                 <div className='new-employee__control'>
                    <label>Salary</label>
                    <input type='number' min='0.01'step='0.01' value={enteredSalary} onChange={salaryInputHandler}/>
                </div>

                 <div className='new-employee__control'>
                    <label>Born in</label>
                    <input type='date' min='1990-01-01' max='2003-12-31' value={enteredDate} onChange={dateInputHandler}/>
                </div>
            </div> 
            <div className='new-employee__actions'>
                <button type='button' onClick={props.onCancelForm}>Cancel</button>
                <button type='submit'>Add Employee</button>
            </div>
        </form>
    )
}

export default EmployeeForm;