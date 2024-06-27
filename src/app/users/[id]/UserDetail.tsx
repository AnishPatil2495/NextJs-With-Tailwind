"use client";

import { userDetailAction } from "@/module/sclices/userSlice2";
import { AppDispatch, RootState } from "@/module/store";
import Link from "next/link";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";


const UserDetail = ({ id }: { id: string }) => {
  const { userDetail } = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(userDetailAction(id));
  }, []);

  return (
    <div>
      <Link href="/users"> Go To User List</Link>
      <h1>Name : {userDetail?.id}</h1>
      <p>Email : {userDetail?.name}</p>
    </div>
  );
};

export default UserDetail;
