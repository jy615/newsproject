import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { useState} from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import { useForm } from "react-hook-form";
import "./Subscribe.css"


function Subscribe() {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")
    const { register, handleSubmit, formState: { errors } } = useForm();

 

    const handleAll = (data) => {
    //    e.preventDefault();
    //    const allValues = [{name, email}];
    
    // console.log(allValues)
    console.log(data)
    alert("Subscribe Successfully!")
    }

    return (
<>
<div className="subscribeform">
    <h1>Subscribe Us!</h1>
<Form onSubmit={handleSubmit(handleAll)}>
      <Form.Field>
        <label>Your Name</label>
        <input placeholder='Name'
        type="text"
         {...register("Name", { required: true, maxLength: 10 })} 
        // value={name}
        // onChange={(e) => setName(e.target.value)}
       
         />
      </Form.Field>
     {errors.Name && alert("Please Check Your Name")}

      <Form.Field>
        <label>Email</label>
        <input placeholder='Email'
        type="email"
        {...register("Email", {required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
        // value={email}
        //  onChange={(e) => setEmail(e.target.value)}  
         
        />
      </Form.Field>
      {errors.email && alert("Please Check Your Email")}
      <Button type="submit">Submit</Button>
  
  
    </Form>

    </div>
    </>
    )
    }
  
  export default Subscribe
  