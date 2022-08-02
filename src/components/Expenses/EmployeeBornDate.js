import './EmployeeBornDate.css'

const EmployeeBornDate = (props)=>{
    //Date variables
    const month = props.bornin.toLocaleString('en-US', {month: 'long'});
    const day = props.bornin.toLocaleString('en-US', {day: '2-digit'})
    const year = props.bornin.getFullYear();

     const bornIn = 'Born in: ';

    return (
        <div className='employee-date'>
            {bornIn}
            <div className='employee-date__month'>{month}</div>
            <div className='employee-date__year'>{year}</div>
            <div className='employee-date__day'>{day}</div>
         </div>
    )
}

export default EmployeeBornDate;