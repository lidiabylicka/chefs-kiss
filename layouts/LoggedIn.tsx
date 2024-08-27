"use client";

import { useState } from "react";
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
import ProfileIcon from "@/public/svg/Profile";

type LoggedInProps = {
  children: React.ReactNode;
};

Amplify.configure(awsConfig);

const LoggedIn: React.FC<LoggedInProps> = ({ children }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const router = useRouter();

  const components = {
    SignIn: {
      Header() {
        return <Header>to continue, sign in or create a new account</Header>;
      },
      Footer() {
        const { toForgotPassword } = useAuthenticator();

        return (
          <View textAlign="center">
            <div className="flex gap-2 w-full justify-between font-semibold">
              <Button onClick={toForgotPassword}>reset password</Button>
              <Button onClick={() => router.push("/")}>
                back to main page
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
              <Button onClick={toSignIn}>back to sign in</Button>
            </div>
          </View>
        );
      },
    },
  };

  const handleShowMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };

  return (
    <div className="w-full h-full gap-20 flex-col justify-center flex">
      <ThemeProvider theme={theme}>
        <Authenticator components={components}>
          {({ signOut, user }) => {
            const displayName = (user as AuthUser)?.signInDetails?.loginId;
            return (
              <div className="sm:mx-2">
                <div className="fixed flex flex-row top-4 left-4">
                  <button className="fixed" onMouseEnter={handleShowMenu}>
                    <ProfileIcon />
                  </button>

                  <div
                    className={`fixed transition-opacity duration-300 ease-in-out left-20 border rounded-xl flex flex-col gap-1 items-center border-white p-2 ml-1 sm:bg-yellow sm:w-2/3 ${
                      showProfileMenu
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <Link className="w-full" href="/profile">
                      <Button>{displayName} </Button>
                    </Link>

                    <Link className="w-full" href="/fridge">
                      <Button>my fridge</Button>
                    </Link>

                    <Link className="w-full" href="/my-recipes">
                      <Button>my recipes</Button>
                    </Link>

                    <Link className="w-full" href="/about">
                      <Button>about</Button>
                    </Link>

                    <Button
                      onClick={() => {
                        signOut?.();
                        router.push("/landing");
                      }}
                    >
                      sign out
                    </Button>
                  </div>
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
