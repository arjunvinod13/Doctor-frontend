import React from 'react'


import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import Intro from './Intro';

function CardData({doctors}) {
    console.log(doctors);
  return (
    
    
    <div  className='my-3 ' style={{marginLeft:30}}> 

    
   
    <Link to={`view/${doctors.id}`} style={{textDecoration:'none'}}>
    <MDBCard  >
    <MDBCardBody >
      <MDBCardTitle>{doctors.hospital}</MDBCardTitle>
      <MDBCardText>
         {doctors.name}
      </MDBCardText>
      <MDBCardText>
         Contact : {doctors.phone}
      </MDBCardText>
      <MDBCardText>
         ⭐{doctors.rating}
      </MDBCardText>
      <MDBBtn >More</MDBBtn>
    </MDBCardBody>
  </MDBCard>
    </Link>
   </div>
  )
}

export default CardData