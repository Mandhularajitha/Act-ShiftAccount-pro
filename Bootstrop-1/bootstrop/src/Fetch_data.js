import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
var data2 = require('../src/Fetch_data.json');

const Fetch_data = () => {
  const [searITemss,setSearchItems] = useState([{full_name:""}])
  const [value, setValue] = useState("");

 localStorage.setItem("value",JSON.stringify(value))
  
  const stateName  = JSON.parse(localStorage.getItem("featchdata"))

  const onChange = (event) => {

    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);

  };


  return (
    <div>
      <div >
        <TextField 
                id="smart-search"
                label="search"
                variant="outlined"
                placeholder="Search places"
                fullWidth
                value={value} 
                onChange={onChange}
                />
        
         <div className="dropdown">
          
          {data2[stateName]?.filter((item) => {
              const searchTerm = value.toLowerCase();
              const fullName = item.full_name.toLowerCase();

              return (
                searchTerm && searchTerm.length > 3 &&
                fullName.startsWith(searchTerm) &&
                fullName !== searchTerm
              );
            })
            .slice(0,10)
            .map((item) => (
              <div
                onClick={() => onSearch(item.full_name)}
                className="dropdown-row"
                key={item.full_name}
                
              >
                {item.full_name}
              </div>
            ))}
          
        </div>
      </div>
    </div>
  )
}



export default Fetch_data;