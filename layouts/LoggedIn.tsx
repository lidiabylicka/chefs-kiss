"use client";

import { Amplify } from "aws-amplify";

// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
//import { useForm } from "react-hook-form";

// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "@/aws-exports";

import Button from "./components/Button";
import Navbar from "./Navbar";

type LoggedInProps = {
  children: React.ReactNode;
};
Amplify.configure(awsConfig);

const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  return (
    <div className="w-full h-full gap-20 flex-col justify-center flex">
      <Authenticator>
        {({ signOut }) => (
          <>
            <div className="fixed top-4 right-4">
              <Button
                onClick={() => {
                  console.log("Sign out clicked");
                  signOut && signOut();
                }}
              >
                Sign out
              </Button>
            </div>
            <Navbar>
              <div>Left hand side</div>
              <div></div>
              <div>Right Links</div>
            </Navbar>
            <div className="flex flex-col p-12">
              <div>{children}</div>
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
};

export default withAuthenticator(LoggedIn);
