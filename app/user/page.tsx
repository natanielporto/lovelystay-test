"use client";

import Link from "next/link";
import { Suspense, useContext } from "react";
import { GlobalContext } from "../globalContext/searchContext";
import ThemeSwitch from "../components/atoms/Switch";
import Image from "next/image";
import { BackButton } from "../components/atoms/BackButton";
import * as S from "./styles";

export default async function UserPage() {
  const { user } = useContext(GlobalContext);
  const { name, avatar_url, bio, followers, following, login } = user;

  return (
    <Suspense fallback={<div>Loading user...</div>}>
      <BackButton />
      <ThemeSwitch />
      <S.Container>
        <Link href={`/user/${name}`}>
          <S.CenterCard>
            <h1>{name}</h1>
            <p>Login: /{login}</p>
            <Image
              src={avatar_url}
              alt={`Avatar for ${name}`}
              width={250}
              height={250}
            />
            <p>{bio}</p>
            <div>
              <p>Followers: {followers}</p>
              <p>Following: {following}</p>
            </div>
          </S.CenterCard>
        </Link>
      </S.Container>
    </Suspense>
  );
}
