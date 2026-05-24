import { Suspense } from "react";
import LoginForm from "./LoginForm";

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="login-page"><div className="login-card"><p>Chargement…</p></div></div>}>
      <LoginForm />
    </Suspense>
  );
}
