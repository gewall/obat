import Navbar from "@/components/ui/navbar";
import React, { Fragment } from "react";
import Footer from "../_sections/footer";

type Props = {
  children: React.ReactNode;
};

const PageLayout = (props: Props) => {
  return (
    <Fragment>
      <Navbar
        menus={[
          { name: "Home", uri: "/" },
          { name: "About", uri: "/about" },
          { name: "Projects", uri: "/projects" },
        ]}
      />
      {props.children}

      <Footer />
    </Fragment>
  );
};

export default PageLayout;
