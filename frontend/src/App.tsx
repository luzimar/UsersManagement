import React, { useEffect, useState } from "react";
import api from "./services/api";
import IUser from "./interfaces/IUser";
import User from "./components/User";
import Greeting from "./components/Greeting";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get<IUser[]>("/users");
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User key={user.email} user={user}>
          <Greeting />
        </User>
      ))}
    </div>
  );
}

export default App;
