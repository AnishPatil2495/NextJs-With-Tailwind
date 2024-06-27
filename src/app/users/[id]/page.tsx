import React from "react";
import UserDetail from "./UserDetail";

interface User {
  id: string;
}

export async function generateStaticParams() {
  const request = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-cache",
  });

  const userList: User[] = await request.json();

  return userList.map((user) => ({
    id: `${user.id}`,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div>
      <h1>User Details...</h1>
      <UserDetail id={id} />
    </div>
  );
}
