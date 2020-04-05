import React from "react";
import IUser from "../interfaces/IUser";

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user, children }) => {
  return (
    <div>
      {children}
      <strong>Name: </strong> {user.username} <br />
      <strong>E-mail: </strong> {user.email || "Without e-mail."}
    </div>
  );
};

export default User;
