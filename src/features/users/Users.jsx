import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./usersSlice";

const Users = () => {
  //const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  //   const fetchUsers = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3004/users");
  //       const users = await response.json();

  //       setUsers(users);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   };

  return (
    <div>
      Users List
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
