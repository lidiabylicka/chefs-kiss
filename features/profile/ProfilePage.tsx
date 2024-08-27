"use client";

import { useEffect, useState } from "react";

import { AuthUser } from "aws-amplify/auth";
import { Authenticator } from "@aws-amplify/ui-react";

import Button from "@/layouts/components/Button";
import Wrapper from "./components/Wrapper";

const ProfilePage = () => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "15px" }}>
        <Authenticator>
          {({ user }) => {
            const displayName = (user as AuthUser)?.signInDetails?.loginId;

            return (
              <div className="flex flex-col w-full gap-5">
                <div className="text-2xl text-aqua">name, age </div>
                <div className="text-2xl text-aqua">{displayName} </div>
                <form
                  style={{ marginTop: "15px" }}
                  className="flex flex-col gap-2"
                >
                  <p>add more details:</p>
                  <input type="text" placeholder="your name" />
                  <input type="number" placeholder="your age" />
                  <Button>save</Button>
                </form>
                <hr style={{ marginTop: "15px" }} />

                <form
                  style={{ marginTop: "15px" }}
                  className="flex flex-col gap-1"
                >
                  <h3>change password:</h3>
                  <input type="password" placeholder="old password" />
                  <input type="password" placeholder="new password" />
                  <Button>submit</Button>
                </form>
              </div>
            );
          }}
        </Authenticator>
      </div>
      <Button>delete account</Button>
    </Wrapper>
  );
};

export default ProfilePage;
