import './EmployeeDescription.css';
const EmployeeDescription = ()=>{
    return(
        <div className='employee-wrap'>
            <div>Birthday: March 28th 1982</div>
            <div className='employee-description'>
                <h4>Name</h4>
                  <h4>Position</h4>
            </div>
            <div className='employee-description'> 
                <h4>Gender</h4>
                <div className='employee-description__salary'>Salary</div>
                
            </div>
        </div>
    )
}

export default EmployeeDescription;