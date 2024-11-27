import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/api/handler";
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
