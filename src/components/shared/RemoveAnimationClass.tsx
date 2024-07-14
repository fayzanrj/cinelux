"use client";
import { useEffect } from "react";

// Props
interface RemoveAnimationClassProps {
  q?: string;
}

const RemoveAnimationClass : React.FC<RemoveAnimationClassProps> = ({q}) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body?.classList.remove("page-transition");
  }, [q]);

  return null;
};

export default RemoveAnimationClass;
