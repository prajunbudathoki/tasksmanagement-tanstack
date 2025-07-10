import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "@tanstack/react-form";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useNavigate } from "@tanstack/react-router";

export const SignUpCard = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("as");
      console.log({ value });
      await authClient.signUp.email(
        {
          email: value.email,
          password: value.password,
          name: value.name,
          callbackURL: "/",
        },
        {
          onSuccess: () => {
            toast.success("Sign up successful! Redirecting...");
            navigate({ to: "/auth/Signin" });
          },
          onError: (error) => {
            console.error("Sign up failed", error);
          },
        }
      );
    },
  });
  return (
    <Card className="w-full h-full md:w-[487px] border-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4" onSubmit={form.handleSubmit}>
          <form.Field
            name="name"
            children={(field) => (
              <Input
                type="text"
                required
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter your name"
              />
            )}
          />
          <form.Field
            name="email"
            children={(field) => (
              <Input
                type="email"
                required
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter email address"
              />
            )}
          />
          <form.Field
            name="password"
            children={(field) => (
              <Input
                type="password"
                required
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Enter password"
              />
            )}
          />
          <Button
            size={"lg"}
            type="submit"
            variant={"default"}
            className="w-full"
          >
            Sign up
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant={"outline"} type="submit">
          <FcGoogle className="mr-2 size-5" />
          Login with google
        </Button>
      </CardContent>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7 flex items-center justify-center">
        <p>
          Already have an account?
          <span className="text-blue-700">&nbsp;Sign In</span>
        </p>
      </CardContent>
    </Card>
  );
};
