import React from "react";
import { Button } from "../..";
const NavUser = () => {
  return (
    <div>
      <div className="nav_auth">
        <Button to="/login">Войти</Button>
        <Button to="/register" variant="outline">
          Регистрация
        </Button>
      </div>
    </div>
  );
};

export default NavUser;
