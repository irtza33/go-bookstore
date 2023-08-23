
import React from 'react';
import axios from "axios";
import { useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className='p-5 text-center'>
        <h1 className='mb-4'>Book Store</h1>
      </div>
      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" href='/landing'>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="/register">Register</a></p>

        </div>

    </MDBContainer>
  );
}

export default Login;