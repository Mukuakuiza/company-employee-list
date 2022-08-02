import React from 'react';
import './EmployeeDescription.css';
import EmployeeBornDate from './EmployeeBornDate';
import Card from '../UI/Card';

//this function access all the properties of the class App passed 
const EmployeeDescription = (props)=>{

    const name = 'Name: ';
    const position = 'Position: ';
    const gender = 'Gender: ';
    const salary = 'Salary: '

    
    return(
        <li>
            <Card className='employee-wrap'>
                <EmployeeBornDate bornin={props.bornin}/>
                <div className='employee-description'>
                    <h4>{name} {props.name} </h4>
                    <h4>{position} {props.position}</h4>
                </div>
                <div className='employee-description'> 
                    <h4>{gender} {props.gender}</h4>
                    <div className='employee-description__salary'>{salary} {props.salary}</div>
                </div>
            </Card>
        </li>
    )
}

export default EmployeeDescription;