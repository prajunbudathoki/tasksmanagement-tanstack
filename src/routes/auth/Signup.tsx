import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/auth/Signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/auth/Signup"!</div>
}
