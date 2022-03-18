import React, { ReactNode } from "react";
import SideBar from ".";
import {  stageSideBar } from "../../pages/objects-sidebar";


interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <SideBar itemSideBar={stageSideBar}/>
      {children}
      {/* <Footer/> */}
    </>
  );
};

export default Layout;