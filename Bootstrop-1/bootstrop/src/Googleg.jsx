import React, { useState, useEffect } from 'react'
import TextField from "@mui/material/TextField";
import axios from 'axios';

const Googleg = () => {
    const [val, setVal] = useState("")
    const [data, setData] = useState([])
    const [selected, setSelected] = useState("")

    const handleClick = (value) => {
        setSelected(value) 
    }
  
     localStorage.setItem("raj",JSON.stringify(selected))


    useEffect(() => {

        var config = {
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${val}&types=geocode&language=fr&key=AIzaSyAddwFzEu83xzv_3kQjwLOrK3d35bmiOKg`,
            headers: {}
        };

        axios(config)
            .then(function (response) {
                setData(response.data.predictions)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [val])

    return (
        <div>

            <div>

                {
                    !selected
                        ?
                        <TextField
                            style={{ marginTop: "2rem", width:"440px" }}
                            onChange={(e) => setVal(e.target.value)}
                            
                            id="demo-helper-text-aligned"
                            label="installation address"
                            variant='outlined'
                        />

                        :

                        <TextField
                            style={{ width: "430px", marginTop: "2rem" }}
                            onChange={(e) => setVal(e.target.value)}
                            value={selected}
                            id="demo-helper-text-aligned"
                            label="search Address"
                           
                        />
                }

            </div>
            {
                data.map(item => {
                    return <>
                        {
                            selected ? <div></div> : <div onClick={() => handleClick(item.description)}
                                value={item.description}>{item.description}</div>
                        }


                    </>
                })
            }
        </div>
    )
}

export default Googleg
