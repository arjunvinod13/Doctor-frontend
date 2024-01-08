import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardLink
} from 'mdb-react-ui-kit';
function DocReview({review}) {
  console.log(review);
  return (
    <div>
      {review?.map(item=>(
            <MDBCard style={{background:'rgba(0,0,0,0.60)',}}>
            <MDBCardBody>
              <MDBCardTitle>{item.patient_name}</MDBCardTitle>
              
              <MDBCardSubTitle>⭐{item.rating}</MDBCardSubTitle>
              
              <MDBCardText>
                {item.comments}
              </MDBCardText>
              <br />
              <MDBCardSubTitle>{item.date}</MDBCardSubTitle>
              <br />
              
              
           
              
            </MDBCardBody>
          </MDBCard>
      
      ))}
    </div>
  )
}

export default DocReview