"use client";

import { SyntheticEvent, useContext, useRef } from "react";
import Button from "../../atoms/Button";
import { Input } from "../../atoms/Input/intex";
import { GlobalContext } from "../../../globalContext/searchContext";
import { useRouter } from "next/navigation";
import * as S from "./styles";

export default function InputField() {
  const { setUsername } = useContext(GlobalContext);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const name = inputRef.current?.value;

    if (name !== undefined) {
      setUsername(name);
      router.push(`/user`);
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <Input placeholder="Who's handler to fetch?" ref={inputRef} />
      <Button action="Search" />
    </S.Container>
  );
}
