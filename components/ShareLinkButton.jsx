"use client";

import { useState } from "react";
import { LinkIcon } from "@heroicons/react/20/solid";

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };
  console.log("[ShareLinkButton] clicked:", clicked);

  return (
    <button
      onClick={handleClick}
      className="border flex gap-1 items-center px-2 py-1 rounded
       text-slate-500 text-sm
                   hover:bg-orange-100 hover:text-slate-700"
    >
      <LinkIcon />
      {clicked ? "Link copied!" : "Share link"}
    </button>
  );
}
