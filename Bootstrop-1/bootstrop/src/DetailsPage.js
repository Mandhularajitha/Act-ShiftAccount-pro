import React from 'react'

const DetailsPage = () => {
    const details1 = localStorage.getItem("detailsdata");
    const details2 = JSON.parse(details1);

    const details3 = localStorage.getItem("featchdata");
    const details4 = JSON.parse(details3);

    const details5 = localStorage.getItem("detailsof");
    const details6 = JSON.parse(details5);


    const database7 = localStorage.getItem("value");
    const database8 = JSON.parse(database7)

    const data9 = localStorage.getItem("raj")
    const dataitem1 = JSON.parse(data9);


    return (
        <>
        <div style={{border:"solid gray",width:"40rem",marginLeft:"20rem",marginTop:"5rem", boxShadow: "3px 2px 8px 8px #888888",borderRadius:"2rem"}}>

            <h3>name : {details2.name}</h3>
            <h3>acountNo : {details2.acountNo}</h3>
            <h3>currentAddress : {details2.currentAddress}</h3>
            <h3>please select where you want to shift : {details4}</h3>

            {
                details6.doorNo ?

                    <h3>Building Name/Door No : {details6.doorNo} </h3>

                    :
                    <h3>Building Name/Door No : {database8}</h3>
            }


            {
                (dataitem1) ? <h3>Shifting Address : {dataitem1}</h3> : <h3>Shifting Address : {details6.place}</h3>
            }

            <h3>Pincode :{details6.pinCode}</h3>

        </div>
        </>
    )
}

export default DetailsPage;
