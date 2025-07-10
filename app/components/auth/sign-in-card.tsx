import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "@tanstack/react-form";

export const SignInCard = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      console.log("form submitted", value);
    },
  });
  return (
    <Card className="w-full h-full md:w-[487px] border-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Welcome back!</CardTitle>
      </CardHeader>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4" onSubmit={form.handleSubmit}>
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
            Log in
          </Button>
        </form>
      </CardContent>
      <div className="px-7">
        <Separator />
      </div>
      <CardContent className="p-7 flex flex-col gap-y-4">
        <Button variant={"outline"}>
          <FcGoogle className="mr-2 size-5" />
          Login with google
        </Button>
      </CardContent>
    </Card>
  );
};
