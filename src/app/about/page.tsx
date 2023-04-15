import React from "react";

async function getNotes() {
  const response = await fetch("http://www.github.com", { cache: "no-store" });

  console.log(response);
  // const data = await response.json();
  // console.log(data);
}

export default async function MyPage() {
  const bla = await getNotes();
  console.log(bla);
  return (
    <div
      style={{
        color: "black",
        height: 300,
        width: 300,
        backgroundColor: "red",
      }}
    >
      page
    </div>
  );
}
