import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

import AIFForm from "@/components/AIFForm"; // we'll create this component next

const page = () => {
  return (
    <div>
      <NavBar />
      <AIFForm />
      <Footer />
    </div>
  );
};

export default page;
