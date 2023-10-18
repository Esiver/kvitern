
import React from "react";

interface IUser {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
    {next:{revalidate:10}}  
  );
  const users: IUser[] = await res.json();
  

  return (
    <>
      <h2>Users</h2>
      {users.map((user) => 
        <li key={user.id}>{user.name}</li>
      )}
    </>
  );
};

export default UserPage;
