"use client";

import React, { useEffect, useRef } from "react";
import UsersList from "./UsersList";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/module/store";
import { fetchUserList2 } from "@/module/sclices/userSlice2";

const Users = () => {
  const useCurrentRef = useRef<Boolean>(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (useCurrentRef.current !== true) {
      dispatch(fetchUserList2());
    }
    return () => {
      useCurrentRef.current = true;
    };
  }, []);
  return (
    <>
      <div>
        <h1>Users List</h1>
        <UsersList />
      </div>
    </>
  );
};

export default Users;
