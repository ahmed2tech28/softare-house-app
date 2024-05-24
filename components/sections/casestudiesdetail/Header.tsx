"use client";
import Navbar from "@/components/common/Navbar";
import React, { useState } from "react";

const Header = () => {
  const [linkHovered, setlinkHovered] = useState("");

  return (
    <header
      className=" w-screen relative text-black"
      onMouseLeave={(e) => setlinkHovered("")}
    >
      <Navbar linkHovered={linkHovered} setlinkHovered={setlinkHovered} />
    </header>
  );
};

export default Header;
