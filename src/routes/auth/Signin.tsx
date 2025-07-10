import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/Signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/Signin"!</div>
}
