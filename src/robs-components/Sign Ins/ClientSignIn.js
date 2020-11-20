import React from "react";
import Form from "../Forms/SignInForm";
import Styled from "styled-components";

export default function ClientSignIn(props){
  const { formData, disabled, formSubmit, handleChanges, errors } = props;


  return(
    <ClientSignInStyles>

      <div className="side-image">
      </div>

      <div className="form-container">

        <div>
          <h2>Client<br/>Sign In</h2>
        </div>

          <Form 
            formData={formData} 
            disabled={disabled}
            formSubmit={formSubmit}
            handleChanges={handleChanges}
            errors={errors}
          />

      </div>

    </ClientSignInStyles>
  )
}

const ClientSignInStyles = Styled.div`
  display: flex;
  Justify-content: space-evenly;
  align-items: center;

  .side-image{
    background-image: url("https://cdn2.stylecraze.com/wp-content/uploads/2013/11/Zen-Yoga-%E2%80%93-What-Is-It-And-What-Are-Its-Benefits-2-624x702.jpg");
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