import React, { useState } from 'react'
import Form from "./components/form/Form";
import { useDispatch } from 'react-redux';
import "./login.css"


const Login = () => {
    const [conta, setConta] = useState({})
    const dispatch = useDispatch();
  
    function handleUpdatedStatus(e) {
        setConta({ ...conta,[e.target.name]: e.target.value })
    }


  return (
    <>
     <Form handleUpdatedStatus={handleUpdatedStatus} conta={conta}></Form>
     </>
  );
};

export default Login;
