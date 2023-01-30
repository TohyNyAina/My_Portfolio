
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const Contact = () => {
  return (
    <div><Container id="main-container" className='d-grid h-100'>
    <Form id="sign-in-form" className='text-center w-100'>
      <h1 className="fs-3 fw-normal">SIGN UP</h1>
    
      <Form.Group>
      <Form.Control type='text' size='lg' placeholder='Entrer votre Nom' autoComplete='username'/>
      </Form.Group>
      <Form.Group>
      <Form.Control type='text' size='lg' placeholder='Entrer votre Prenom' autoComplete='username'/>
      </Form.Group>
      <Form.Group>
      <Form.Control type='email' size='lg' placeholder='Email Adress' autoComplete='username'/>
      </Form.Group>
      <Form.Group>
      <Form.Control type='password' size='lg' placeholder='password' autoComplete='password'/>
      </Form.Group>
      <br/>
      <div className='d-grid'>
      
      </div>
      <Link to='./Signin'>Sign in</Link>
      </Form>
    </Container></div>
  
  );
};
