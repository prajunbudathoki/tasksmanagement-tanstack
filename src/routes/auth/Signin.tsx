import { createFileRoute } from "@tanstack/react-router";
import { SignInCard } from "@/components/auth/sign-in-card";

export const Route = createFileRoute("/auth/Signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SignInCard />
    </div>
  );
}
