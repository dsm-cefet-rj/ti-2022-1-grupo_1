import React, { useState } from 'react'
import Form from "./components/form/Form";
import { useDispatch } from 'react-redux';
import "./login.css"


const Login = () => {
    const [conta, setConta] = useState({
      email: "",
      password: "",
    })
    const dispatch = useDispatch();
  
    function handleUpdatedStatus(e) {
        let updated = { ...conta,[e.target.name]: e.target.value }
        setConta(updated);
        console.log(updated);
    }

  return (
    <>
     <Form handleUpdatedStatus={handleUpdatedStatus} conta={conta}></Form>
    </>
  );
};

export default Login;
