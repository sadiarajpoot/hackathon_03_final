"use client";

import { useAuth, SignInButton, UserButton } from "@clerk/nextjs";

export default function AuthButtons() {
  const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn ? <SignInButton mode="modal" /> : <UserButton />}
    </>
  );
}
