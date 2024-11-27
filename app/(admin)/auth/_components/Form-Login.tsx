import { Button } from "@/components/ui/button";
import { signIn } from "@/lib/api/handler";
import React from "react";

type Props = {};

const FormLogin = (props: Props) => {
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
