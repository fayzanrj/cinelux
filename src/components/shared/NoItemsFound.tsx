import React from "react";

// Props
interface NoItemsFoundProps {
  label: string;
}

const NoItemsFound: React.FC<NoItemsFoundProps> = ({ label }) => {
  return (
    <h3 className="font-semibold text-lg md:text-2xl xl:text-4xl my-4 uppercase mx-auto text-center">
      {label}
    </h3>
  );
};

export default NoItemsFound;
