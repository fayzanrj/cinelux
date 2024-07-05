import React, { FormEvent } from "react";
import getBgColor from "../../libs/GetBgColor";
import Loader from "./Loader";
import Logo from "./Logo";

// Props
interface FormLayoutProps {
  variant: "USER_INFO" | "CODE_VERIFICATION";
  handleSubmit: (() => void) | ((e: FormEvent) => void);
  isLoading: boolean;
  children: React.ReactNode;
}

const FormLayout: React.FC<FormLayoutProps> = ({
  handleSubmit,
  isLoading,
  variant,
  children,
}) => {
  // Function to get button text
  const renderBtnText = () => {
    switch (variant) {
      case "CODE_VERIFICATION":
        return "VERIFY";
      case "USER_INFO":
        return "SEND CODE";
    }
  };

  return (
    <form
      className=" w-[95%] max-w-96 px-3 py-4 drop-shadow-xl shadow-lg rounded-lg"
      onSubmit={handleSubmit}
      style={getBgColor("primary")}
    >
      <div className="text-center">
        <Logo size="lg" />
      </div>

      <div className="py-2 text-left">{children}</div>

      {/* SUBMISSION BUTTON */}
      <button
        type="submit"
        className="relative h-10 bg-blue-700 font-semibold text-white rounded-lg disabled:opacity-50 w-full"
        disabled={isLoading}
      >
        {isLoading ? <Loader /> : renderBtnText()}
      </button>
    </form>
  );
};

export default FormLayout;
