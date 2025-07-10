import { createFileRoute, Outlet, useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
  component: RouteComponent,
});

function RouteComponent() {
  const location = useLocation();
  console.log("location", location);
  return (
    <main className="bg-neutral-200 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <h1>logo</h1>
          <Button variant={"secondary"}>
            <Link
              to={
                location.pathname === "/auth/signin"
                  ? "/auth/signup"
                  : "/auth/signin"
              }
              className="text-sm"
            >
              {location.pathname === "/auth/signin" ? "Sign Up" : "Sign In"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
