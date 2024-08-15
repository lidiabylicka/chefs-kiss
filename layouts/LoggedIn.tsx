"use client";
import { useRouter } from "next/navigation";

import { Amplify } from "aws-amplify";
// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";

// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "@/aws-exports";

import Button from "./components/Button";
import Navlink from "./components/Navlink";

type LoggedInProps = {
  children: React.ReactNode;
};
Amplify.configure(awsConfig);

const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  const router = useRouter();
  return (
    <div className="w-full h-full gap-20 flex-col justify-center flex">
      <Authenticator>
        {({ signOut, user }) => {
          const displayName = (user as AuthUser)?.signInDetails?.loginId;
          return (
            <>
              <div className="fixed top-4 left-4">
                <div className="pl-1  sm:hidden">
                  Signed in as: <Navlink href="/profile">{displayName}</Navlink>
                </div>
                <Button
                  // onClick={() => {
                  //   signOut && signOut();
                  // }}
                  onClick={() => {
                    signOut?.();
                    router.push("/landing"); // Redirect to /landing after signing out
                  }}
                >
                  Sign out
                </Button>
              </div>
              <div className="flex flex-col p-12">
                <div>{children}</div>
              </div>
            </>
          );
        }}
      </Authenticator>
    </div>
  );
};

export default withAuthenticator(LoggedIn);
