import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
           <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href=''>
            <img
              src='https://w7.pngwing.com/pngs/313/516/png-transparent-stethoscope-icon-stethoscope-icon-medical-icons-medical-icon-medicine-doctor-diagnosis-diagnose-clinic.png'
              height='50'
              alt=''
              loading='lazy'
            />
            <div style={{marginTop:'8px'}}><h2 >Dr.On Call</h2></div>
            
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header