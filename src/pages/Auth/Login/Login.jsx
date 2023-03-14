import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import Input from "../../../components/Form/Input/Input";
import Heading from "../../../components/Heading/Heading";
import "../../Auth/auth.scss";

const Login = () => {
  return (
    <div className="auth">
      <div className="auth_box">
        <Heading>Войти</Heading>

        <form className="auth_box_form">
          <Input value="" name="userName" placeholder="userName" />
          <Input value="2" name="userName" placeholder="userName" />

          <Link to="\Forgot" className=" auth_box_forgot ">
            Забыли пароль?
          </Link>
          <Button>Войти </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
