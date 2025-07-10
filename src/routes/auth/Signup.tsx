import { SignUpCard } from "@/components/auth/sign-up-card";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/Signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <SignUpCard />
    </div>
  );
}
