"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { routes, protectedRoutes } from "@/app/resources";
import { getLocaleFromPathname, stripLocale, ui } from "@/app/resources/i18n";
import { Flex, Spinner, Button, Heading, Column, PasswordInput } from "@/once-ui/components";
import NotFound from "@/app/not-found";

interface RouteGuardProps {
  children: React.ReactNode;
}

const dynamicRoutes = ["/blog", "/work"] as const;

function isRouteEnabled(pathname: string): boolean {
  if (!pathname) return false;

  if (pathname in routes) {
    return routes[pathname as keyof typeof routes];
  }

  for (const route of dynamicRoutes) {
    if (pathname.startsWith(route) && routes[route]) {
      return true;
    }
  }

  return false;
}

const RouteGuard: React.FC<RouteGuardProps> = ({ children }) => {
  const rawPathname = usePathname() ?? "";
  const locale = getLocaleFromPathname(rawPathname);
  const pathname = stripLocale(rawPathname) || "/";
  const t = ui[locale];

  // Computed synchronously, so the page is part of the server-rendered HTML.
  const routeEnabled = isRouteEnabled(pathname);
  const passwordRequired = !!protectedRoutes[pathname as keyof typeof protectedRoutes];

  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [checking, setChecking] = useState(passwordRequired);

  useEffect(() => {
    if (!passwordRequired) {
      setChecking(false);
      return;
    }

    let cancelled = false;
    setChecking(true);
    setIsAuthenticated(false);

    fetch("/api/check-auth")
      .then((response) => {
        if (!cancelled) setIsAuthenticated(response.ok);
      })
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setChecking(false);
      });

    return () => {
      cancelled = true;
    };
  }, [passwordRequired, pathname]);

  const handlePasswordSubmit = async () => {
    const response = await fetch("/api/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (response.ok) {
      setIsAuthenticated(true);
      setError(undefined);
    } else {
      setError(t.incorrectPassword);
    }
  };

  if (!routeEnabled) {
    return <NotFound locale={locale} />;
  }

  if (passwordRequired && checking) {
    return (
      <Flex fillWidth paddingY="128" horizontal="center">
        <Spinner />
      </Flex>
    );
  }

  if (passwordRequired && !isAuthenticated) {
    return (
      <Column paddingY="128" maxWidth={24} gap="24" center>
        <Heading align="center" wrap="balance">
          {t.passwordTitle}
        </Heading>
        <Column fillWidth gap="8" horizontal="center">
          <PasswordInput
            id="password"
            label={t.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            errorMessage={error}
          />
          <Button onClick={handlePasswordSubmit}>{t.submit}</Button>
        </Column>
      </Column>
    );
  }

  return <>{children}</>;
};

export { RouteGuard };
