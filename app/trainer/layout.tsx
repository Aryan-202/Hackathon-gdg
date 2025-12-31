import React from "react";
import { SessionProvider } from "next-auth/react";

export default function TrainerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}