import React from "react";
import Styled from "styled-components";
import axios from "axios"
import { axiosWithAuth } from "../../donnies-components/utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

export default function FormClient(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;
   let history = useHistory();

  const onChange = (evt) => {
    const {name, value, checked, type} = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    handleChanges(name, correctValue);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("https://anywhere-fitness.herokuapp.com/auth/login", formData)
      .then((req)=>{
        console.log(req)
        window.localStorage.setItem("token", req.data.token)
        req.data.instructor === true ? history.push("/create-class") : history.push("/view-classes")
        // history.push("/create-class")
      })


    // formSubmit();
  }

  return(
    <StyledClientForm>
      <form onSubmit={onSubmit}>
        <label> Username:
          <input 
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
          />
        </label>

        <label> Password:
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </label>

        <div className="submit-section">
          <div className="errors">
              <div>{errors.username}</div>
              <div>{errors.password}</div>
          </div>
          <button disabled={disabled} >Sign Up</button>
        </div>
      </form>
    </StyledClientForm>
  )
}

const StyledClientForm = Styled.div`
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label{
      font-size: 1.2rem;
      margin: 20px;
      text-align: center;
    }

    button{
      background-color: orange;
      border: none;
      border: 1px solid black;
      padding: 15px 32px;
      text-align: center;
      cursor: pointer;
      box-shadow: 0 2px 2px 2px grey;
    }
    button:Hover {
      background-color: white;
      border: 1px solid orange;
      color: orange;
    }
  }
`;