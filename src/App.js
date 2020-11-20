import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import * as Yup from "yup";
import Styled from "styled-components";


import Home from "./robs-components/Home";
import SignUp from "./robs-components/Sign Ups/ClientSignUp";
import SignIn from "./robs-components/Sign Ins/ClientSignIn";
import SchemaSignUp from "./robs-components/Validations/ClientValidation";
import SchemaSignIn from "./robs-components/Validations/ValidationSignIn";
import CreateClass from "./donnies-components/components/CreateClass"
import CreateClassUpdated from "./donnies-components/components/CreateClassUpdated"
import ClassList from "./donnies-components/components/ClassList"
import UpdateClasses from "./donnies-components/components/UpdateClasses"
import {ClassContext} from "./donnies-components/contexts/ClassContext"
import {axiosWithAuth} from "./donnies-components/utils/axiosWithAuth"



const emptyForm = {
  username: "",
  password: "",
  instructor: false,
}

const emptyFormSignIn = {
  username: "",
  password: "",
}

const emptyErrors = {
  username: "",
  password: "",
  instructor: "",
}

const emptyErrorsSignIn = {
  username: "",
  password: "",
}

function App() {
  const [clientList, setClientList] = useState([]);
  const [clientListSignIn, setClientListSignIn] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [formDataSignIn, setFormDataSignIn] = useState(emptyFormSignIn);
  const [errors, setErrors] = useState(emptyErrors);
  const [errorsSignIn, setErrorsSignIn] = useState(emptyErrorsSignIn);
  const [disabled, setDisabled] = useState(true);
  const [disabledSignIn, setDisabledSignIn] = useState(true);

  const [classesStored, setClasses] = useState([])

  useEffect(()=>{
        axiosWithAuth()
            .get("https://anywhere-fitness.herokuapp.com/classes")
            .then((res)=>{
                // console.log(res.data)
                setClasses(res.data)
                // console.log(classesStored)
            })
            .catch((err)=>{
                console.log(err)
            })
    },[])

  const formSubmit = () => {
    const newClient = {
      username: formData.username.trim(),
      password: formData.password.trim(),
      instructor: formData.instructor.trim(),
    }
    setClientList([
      newClient,
      ...clientList
    ]);
  }

  const formSubmitSignIn = () => {
    const signInClient = {
      username: formDataSignIn.username.trim(),
      password: formDataSignIn.password.trim(),
      instructor: formDataSignIn.instructor.trim(),
    }
    setClientListSignIn([
      signInClient,
      ...clientListSignIn
    ]);
  }

  const handleChanges = (name, value) => {
    Yup.reach(SchemaSignUp, name)
      .validate(value)
      .then(()=>{
        setErrors({
          ...errors,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      });
      setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleChangesSignIn = (name, value) => {
    Yup.reach(SchemaSignIn, name)
      .validate(value)
      .then(()=>{
        setErrorsSignIn({
          ...errorsSignIn,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrorsSignIn({
          ...errorsSignIn,
          [name]: err.errors[0]
        })
      });
      setFormDataSignIn({
      ...formDataSignIn,
      [name]: value
    });
  }

  useEffect(() => {
    SchemaSignUp.isValid(formData).then((valid)=> {
      setDisabled(!valid);
    });
  }, [formData]);

  useEffect(() => {
    SchemaSignIn.isValid(formDataSignIn).then((valid)=> {
      setDisabledSignIn(!valid);
    });
  }, [formDataSignIn]);

  return (
  <ClassContext.Provider value={{classesStored, setClasses}}>
      <BrowserRouter>
      <AppStyles className="App">
        <header className="App-header">
          <div className="title">
            <h1>Anywhere Fitness</h1>
            <nav>
              <Link to="/" style={{paddingLeft: "15px", color: "black"}}>Home</Link>
              <Link to="/client-sign-in" style={{paddingLeft: "15px", color: "black"}}>Sign In</Link>
            </nav>
          </div>
          <div className="slogan">
            <h3>The World is Your Gym</h3>
          </div>
        </header>

        <Switch>
          <Route path={"/update-class/:id"}>
            <UpdateClasses />
          </Route>
          <Route path={"/class-list"}>
            <ClassList />
          </Route>
          <Route path={"/create-class"}>
            <CreateClassUpdated />
          </Route>
          <Route path={"/client-sign-up"} >
            <SignUp 
              formData={formData}
              disabled={disabled}
              formSubmit={formSubmit}
              handleChanges={handleChanges}
              errors={errors}
            />
          </Route>

          <Route path={"/client-sign-in"} >
            <SignIn 
              formData={formDataSignIn}
              disabled={disabledSignIn}
              formSubmit={formSubmitSignIn}
              handleChanges={handleChangesSignIn}
              errors={errorsSignIn}
            />
          </Route>

          <Route path={"/"} >
            <Home />
          </Route>

        </Switch>

        <footer>
          <p>Made by Track Team 67 :)</p>
        </footer>
      </AppStyles>
    </BrowserRouter>
  </ClassContext.Provider>
    
  );
}


const AppStyles = Styled.div`
  display: flex;
  flex-direction: column;
  .title{
    min-height: 15vh;
    h1{
      font-size: 4rem;
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    nav{
      font-size: 1.6rem;
      display: flex;
      justify-content: space-evenly;
    }
  }
  .slogan{
    min-height: 10vh;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    h3{
      font-size: 1.6rem;
      text-align: center;
      text-shadow: 1px 1px 3px grey;
    }
  }
  footer{
    background-color: orange;
    min-height: 15vh;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;


export default App;