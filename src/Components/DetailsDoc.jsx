import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardBody,
  MDBCardImage
} from 'mdb-react-ui-kit';
import DocReview from './DocReview';



function DetailsDoc() {

  const[docDetails,setDocDetails]=useState({})
  // destructure
  const {id} =useParams()
  console.log(id);

  const base_url='https://dr-react-app.onrender.com/doctors'

  //api call to get particular data
  const dataFetch =async()=>{
    const result = await axios.get(`${base_url}/${id}`)
    console.log(result.data);
    setDocDetails(result.data)
   
  }
  console.log(setDocDetails);
  useEffect(()=>{
    dataFetch()
  },[])

  return (
    
    <div >
          <MDBCard style={{margin:'0px'}}  background='dark' className='text-white'>
      <MDBCardImage overlay src='https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?w=1060&t=st=1704667485~exp=1704668085~hmac=bad9aa09aaeb62a58201907df51915cfe453bb957d67b4ede2781c9107937005' alt='...' />
      <MDBCardOverlay>
        <center>
      <MDBCard style={{width:'1000px', margin:'20px', height:'800px', textAlign:'center', background:'rgba(0,0,0,0.60)'}}>
      <MDBCardBody>
        <MDBCardTitle>{docDetails.hospital}</MDBCardTitle>
        <MDBCardTitle>{docDetails.name}</MDBCardTitle>
        <br />
        <MDBCardText>
      Contact :   {docDetails.phone}
       </MDBCardText>
        
        <MDBCardText>
      Email :   {docDetails.email}
        </MDBCardText>
        <MDBCardText>
      Location :   {docDetails.address}
        </MDBCardText>
        <MDBCardText>
      Available Days :   {docDetails.available_days}
        </MDBCardText>
        <hr />
                <hr />
        <h1>Reviews:</h1>
        <MDBCardText>
     <DocReview review={docDetails.reviews}/>
        </MDBCardText>
        

       
       
      </MDBCardBody>
    </MDBCard>
    </center>
      </MDBCardOverlay>
    </MDBCard>

    </div>
  
  )
}

export default DetailsDoc