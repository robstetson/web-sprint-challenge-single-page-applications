import React, {useState, useEffect} from "react";
import axios from 'axios';
import Form from './components/form';
import *  as yup from 'yup';
import schema from './validationSection/formSchema';
import './App.css';
import { Route } from "react-router";
import Home from './components/home'

const intialFormValues ={
name: '',
size:'',
instructions: '',
sauce:'',
pepporoni: false,
onion: false,
bacon: false,
extraCheese: false,

}
const intialFormErrors ={
name: '',
size:'',

}
 const  Orders = []
const initialDisabled = true


function App() {
 
  const [order, setOrder] = useState(Orders);
  const [formValues, setFormValues] = useState(intialFormValues);
  const [formErrors, setFormErrors] = useState(intialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/orders', newOrder )
    .then(response =>{
      setOrder([response.data, ...order])
    })
    .catch(error =>{
      console.error(error);
    })
    .finally(()=>{
      setFormValues(intialFormValues)
    })
  }
 
const validate = (name, value) => {
  yup.reach(schema,name)
  .validate(value)
  .then(()=> setFormErrors ({...formErrors, [name]: ''}))
  .catch(error => setFormErrors({...formErrors, [name]: error.errors[0]}))
    }

    const changeInput =(name,value) => {
      validate(name,value);
      setFormValues({...formValues,[name]: value})
    }

  
    const formSubmition = () =>{
      const newOrder = {
        name:formValues.name.trim(),
        size:formValues.size.trim(),
        sauce:formValues.sauce.trim(),
        instructions:formValues.instructions.trim(),
        toppings: ['pepporoni', 'onion', 'bacon', 'extraCheese'].filter(topping => !!formValues[topping])

      }
      postNewOrder(newOrder);
    }
    
     useEffect(()=> {
       schema.isValid(formValues).then(valid => setDisabled(!valid))
     },[formValues])

 
  return (
<div className='container'>
     <h1>Lambda Eats</h1>
     <Route exact path='/'>
    <p>Want to order some pizza?</p>
    <Home />
    </Route>
    <Route path='/pizza'>

      <Form 
      values={formValues}
      submit={formSubmition}
      change={changeInput}
      disabled={disabled}
      errors={formErrors}
      />
</Route>
</div>
  );
  
};
export default App;
