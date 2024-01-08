import React, { useEffect, useState } from 'react'
import {  MDBRow, MDBCol } from 'mdb-react-ui-kit';

import axios from 'axios'
import CardData from './CardData';
import Intro from './Intro';




function AllData() {

    const base_url='https://dr-react-app.onrender.com/doctors'

    const [AllData,setAllData]=useState([])


    const fetchData=async()=>{
        const result = await axios.get(base_url)
        console.log(result.data);
        setAllData(result.data)
    }
    console.log(AllData);
    useEffect(()=>{fetchData()},[])

    
  return (
    <div>
    <Intro/>
      <MDBRow>
        {
            AllData.map(item=>(
                <MDBCol sm={12} md={6} lg={4} xl={3}>
                   <CardData doctors={item}/>
                </MDBCol>
            ))
        }
      </MDBRow>
   

    </div>
  )
}

export default AllData