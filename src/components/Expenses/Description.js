import React, {useState}from 'react'
import './Description.css'
import EmployeeFilter from './EmployeeFilter'
import EmployeeList from './EmployeeList'
import EmployeeChart from './EmployeeChart'
import Card from '../UI/Card'

const Description =(props)=>{

  const [FilteredYear, setFilteredYear] = useState('Show All')

  const filterEmployeesHandler = (selectedYear)=>{
   setFilteredYear(selectedYear)
  } 

  //filter the employee by year 
  const filteredEmployeeList = props.employees.filter(employee => {
      if(FilteredYear !== 'Show All'){
         return employee.date.getFullYear().toString() === FilteredYear
      }else{
        return true;
      }
  })

 
return(

    <div>
      <Card className='description'>
        <EmployeeFilter selected = {FilteredYear} onChangeFilterEmployee={filterEmployeesHandler}/>
        <EmployeeChart  employees={filteredEmployeeList}/>
        <EmployeeList employees ={filteredEmployeeList}/>        
      </Card>
    </div>
)
    

}

export default Description;