"use client";
import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { NeonAuthUIProvider } from "@neondatabase/auth-ui";
import { authClient } from "@/src/lib/neon/auth-client";
import { authLocalizationPtBR } from "@/src/lib/neon/auth-localization-ptbr";

export function NeonProviders({ children }: { children: ReactNode }) {
  const router = useRouter();
  return (
    <NeonAuthUIProvider
      authClient={authClient}
      navigate={router.push}
      replace={router.replace}
      onSessionChange={() => router.refresh()}
      redirectTo="/painel"
      emailOTP
      // Sistema interno: contas são criadas pelo administrador, sem cadastro público.
      signUp={false}
      localization={authLocalizationPtBR}
      Link={Link}
    >
      {children}
    </NeonAuthUIProvider>
  );
}
