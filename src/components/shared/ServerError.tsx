"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RemoveAnimationClass from "./RemoveAnimationClass";

const ServerError: React.FC = () => {
  return (
    <div className="w-full h-svh flex justify-center items-center flex-col">
      <RemoveAnimationClass/>
      <Image
        src={"/error.png"}
        width={350}
        height={350}
        quality={100}
        alt="Error"
      />
      <h2 className="text-2xl mb-4 font-semibold">Some error occured!</h2>

      <div className="text-center">
        <button
          className="p-0.5 px-6 text-lg bg-blue-700 rounded-md "
          onClick={() => location.reload()}
        >
          Reload Page
        </button>

        <p className="text-lg my-2 font-bold">OR</p>
        <Link
          href={"/"}
          className="p-0.5 px-6 text-lg bg-blue-700 rounded-md "
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ServerError;
