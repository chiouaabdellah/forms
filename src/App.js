import React from "react";
import {useForm} from "react-hook-form";

export default function App(){
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
        <input {...register("name",)} placeholder ="Full Name" />
        <input {...register("wallet", { required: 'This is required!', minLength: {value:4, message: 'Your wallet Address should be 13 characters!'} })} placeholder ="Wallet Adress" />
        <input {...register("event" , { required: true })} placeholder ="Event" />
        <input {...register("numticket" , { required: true } )} placeholder ="Numero de Ticket" /> 
        <input {...register("typeassur" , { required: true } )} placeholder ="Type d'assurance" />
        <input type ="submit" /> 
      </form>
    </div>
  );

}


