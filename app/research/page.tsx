import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/research/quantitativeModel");
  return <div>Loading...</div>;
};

export default page;
