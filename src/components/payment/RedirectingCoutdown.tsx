"use client";
import addAnimationClass from "@/libs/AddAnimationClass";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

// Props
interface RedirectingCoutdownProps {
  label: string;
  href: string;
}

const RedirectingCoutdown: React.FC<RedirectingCoutdownProps> = ({
  href,
  label,
}) => {
  // Time state
  const [timer, setTimer] = useState(90);

  // Router for naviagation
  const router = useRouter();

  // Function to redirect
  const handleRedirect = async () => {
    await addAnimationClass(400)
    router.push(href);
  };

  // Use effect to set timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      handleRedirect();
    }
    // Cleaning up interval on component unmount
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div>
      <p className="my-2">
        Redirecting to {label} in {timer}
      </p>
      <button onClick={handleRedirect}>
        Go Now <IoIosArrowRoundForward className="inline-block" size={"2rem"} />
      </button>
    </div>
  );
};

export default RedirectingCoutdown;
