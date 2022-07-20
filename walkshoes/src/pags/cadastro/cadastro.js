import React, { useState } from 'react'
import Form from "./components/form/Form";
import { useDispatch } from 'react-redux';
import "./cadastro.css"


const Cadastro = () => {
    const [conta, setConta] = useState({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    const dispatch = useDispatch();
  
    function handleUpdatedStatus(e) {
        let updated = { ...conta,[e.target.name]: e.target.value }
        setConta(updated);
    }

  return (
    <>
     <Form handleUpdatedStatus={handleUpdatedStatus} conta={conta}></Form>
    </>
  );
};

export default Cadastro;
