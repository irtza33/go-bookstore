import React from 'react';
import './Register.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';

function Register() {
  return (
    <MDBContainer fluid className='row d-flex justify-content-center' >
        <MDBContainer className='child'>

            <MDBRow className="row d-flex justify-content-center">

                <MDBCol md='6'>

                <MDBCard className='my-5'>
                    <MDBCardBody className='p-5'>

                    <MDBRow>
                        <MDBCol col='6'>
                        <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                        </MDBCol>

                        <MDBCol col='6'>
                        <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                        </MDBCol>
                    </MDBRow>

                    <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
                    <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

                    <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

                    </MDBCardBody>
                </MDBCard>

                </MDBCol>

            </MDBRow>
      </MDBContainer>

    </MDBContainer>
  );
}

export default Register;