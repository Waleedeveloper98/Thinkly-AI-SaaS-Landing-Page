import { Menu } from "lucide-react";
import React from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Container from "../Container";

const Navbar = () => {
  return (
   <Container >
     <MobileNav />
     <DesktopNav />
   </Container>
  );
};

export default Navbar;
