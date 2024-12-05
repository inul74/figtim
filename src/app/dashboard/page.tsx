"use client";

import { signout } from "../actions/auth";

export default function Page() {
  return (
    <div className="flex h-screen w-full">
      <div className="flex h-screen min-w-[264px] flex-col border-r border-gray-200 bg-white p-2">
        <p>Dashboard Page</p>
        <button onClick={() => signout()}>Logout</button>
      </div>
    </div>
  );
}
