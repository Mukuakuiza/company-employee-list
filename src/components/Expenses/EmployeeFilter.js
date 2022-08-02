import './EmployeeFilter.css'

const EmployeeFilter = (props)=>{

    const dropdownChangeHandler = (e) => {
     props.onChangeFilterEmployee(e.target.value);
  };

      return (
    <div className='employee-filter'>
      <div className='employee-filter__control'>
        <label>Filter by year</label>
        <select  value={props.selected} onChange={dropdownChangeHandler}>
          <option value='Show All'>Show All</option>
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
          <option value='1995'>1995</option>
          <option value='1996'>1996</option>
          <option value='1997'>1997</option>
          <option value='1998'>1998</option>
          <option value='1999'>1999</option>
          <option value='2000'>2000</option>
          <option value='2001'>2001</option>
          <option value='2002'>2002</option>
          <option value='2003'>2003</option>
        </select>
      </div>
    </div>
  );
}

export default EmployeeFilter;