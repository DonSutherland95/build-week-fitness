import React from "react";
import Form from "../Forms/FormClient";
import Styled from "styled-components";

export default function ClientSignUp(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <ClientSignUpStyles>

      <div className="side-image">
      </div>

      <div className="form-container">

        <div>
          <h2>Client<br/>Sign Up</h2>
        </div>

        <Form 
          formData={formData} 
          disabled={disabled}
          formSubmit={formSubmit}
          handleChanges={handleChanges}
          errors={errors}
        />
      </div>

    </ClientSignUpStyles>
  )
}

const ClientSignUpStyles = Styled.div`
  display: flex;
  Justify-content: space-evenly;
  align-items: center;

  .side-image{
    background-image: url("https://nextlevelweightlossfl.com/wp-content/uploads/2019/07/benefits-of-lifting-weights.jpeg");
    min-height: 80vh;
    min-width: 50vw;
    max-width: 50vw;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  .form-container{
    min-width: 50vw;
    display: flex;
    flex-direction: column;
    Justify-content: space-evenly;
    align-items: center;

    h2{
      font-size: 3rem;
      text-align: center;
      margin: 30px;
    }
  }
`;