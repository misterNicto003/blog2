import React from "react";
import { Heading, Input, Button } from "../../../components";
import "../../Auth/auth.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="register_box">
        <Heading>Регистрация</Heading>

        <form className="register_box_form">
          <Input name="Username" placeholder="Username" />
          <Input name="Password" placeholder="Password" />
          <Input name="Confirm Password" placeholder="Confirm Password" />
          <Button>регистрация</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
