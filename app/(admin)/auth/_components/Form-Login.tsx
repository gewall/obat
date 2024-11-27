import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";

import React from "react";

const FormLogin = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirectTo: "/dashboard" });
      }}
    >
      <Button type="submit">Login With Github</Button>
    </form>
  );
};

export default FormLogin;
