"use client";

import { Suspense } from "react";

import ErrorBoundary from "./ErrorBoundary";

const AppContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback="Loading ...">
      <ErrorBoundary fallback="Something went wrong!">{children}</ErrorBoundary>
    </Suspense>
  );
};

export default AppContext;
