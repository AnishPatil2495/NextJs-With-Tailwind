"use client";

// import { useAppDispatch, useAppSelector, useAppStore } from "@/module/hooks";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "@/module/store";

interface User {
  id: number;
  name: string;
}

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { userList } = useSelector((state: RootState) => state.user.users);
  
  return (
    <div>
      <ul>
        {userList.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`} scroll={true}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
