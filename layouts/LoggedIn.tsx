"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { Amplify } from "aws-amplify";
// Imports the Authenticator and withAuthenticator components from '@aws-amplify/ui-react'.
// Authenticator is a React component that provides a ready-to-use sign-in and sign-up UI.
// withAuthenticator is a higher-order component that wraps your app component to enforce authentication.
import {
  Authenticator,
  useAuthenticator,
  ThemeProvider,
  View,
  Image,
  Text,
  useTheme,
  Theme,
  Heading,
} from "@aws-amplify/ui-react";
import { AuthUser } from "aws-amplify/auth";

// Imports the default styles for the Amplify UI components. This line ensures that the authenticator looks nice out of the box.
import "@aws-amplify/ui-react/styles.css";
import awsConfig from "@/aws-exports";

import { theme } from "./components/awsTheme";
import Button from "./components/Button";
import Header from "./components/Header";
import Navlink from "./components/Navlink";

type LoggedInProps = {
  children: React.ReactNode;
};

Amplify.configure(awsConfig);

const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  const router = useRouter();

  const components = {
    SignIn: {
      Header() {
        return (
          <Heading padding="0 20 0 20">
            <Header>To continue, sign in or create a new account</Header>
          </Heading>
        );
      },
      Footer() {
        const { toForgotPassword } = useAuthenticator();

        return (
          <View textAlign="center">
            <div className="flex gap-2 w-full justify-between font-semibold">
              <Button onClick={toForgotPassword}>Reset Password</Button>
              <Button onClick={() => router.push("/")}>
                Back to main page
              </Button>
            </div>
          </View>
        );
      },
    },

    SignUp: {
      Footer() {
        const { toSignIn } = useAuthenticator();

        return (
          <View textAlign="center">
            <div className="font-semibold">
              <Button onClick={toSignIn}>Back to Sign In</Button>
            </div>
          </View>
        );
      },
    },
  };

  return (
    <div className="w-full h-full gap-20 flex-col justify-center flex">
      <ThemeProvider theme={theme}>
        <Authenticator components={components}>
          {({ signOut, user }) => {
            const displayName = (user as AuthUser)?.signInDetails?.loginId;
            return (
              <div className="sm:mx-2">
                <div className="fixed top-4 left-4">
                  <div className="pl-1  sm:hidden">
                    Signed in as:{" "}
                    <Navlink href="/profile">{displayName}</Navlink>
                  </div>
                  <Button
                    onClick={() => {
                      signOut?.();
                      router.push("/landing"); // Redirect to /landing after signing out
                    }}
                  >
                    Sign out
                  </Button>
                </div>
                <div className="flex flex-col p-12 sm:mx-2">
                  <div>{children}</div>
                </div>
              </div>
            );
          }}
        </Authenticator>
      </ThemeProvider>
    </div>
  );
};

export default LoggedIn;
