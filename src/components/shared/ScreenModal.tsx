import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import getBgColor from "../../libs/GetBgColor";

// Base props
interface ScreenModalBaseProps {
  children: React.ReactNode;
  className?: string;
}

// Props for form modal
interface ScreenModalFormProps extends ScreenModalBaseProps {
  closeModal: () => void;
  isForm: true;
  showCancel?: boolean;
}

// Props for confirmation modal
interface ScreenModalConfirmationProps extends ScreenModalBaseProps {
  isConfirmation: true;
}

// Props for loader Modal
interface ScreenModalLoaderProps extends ScreenModalBaseProps {
  isLoader: true;
}

// Props for simple modal
interface SimpleModalLoaderProps extends ScreenModalBaseProps {
  isSimpleModal: true;
}

// Props
type ScreenModalProps =
  | ScreenModalFormProps
  | ScreenModalLoaderProps
  | ScreenModalConfirmationProps
  | SimpleModalLoaderProps;

const ScreenModal: React.FC<ScreenModalProps> = ({
  className = "",
  ...props
}) => {
  // Props
  const isForm = (props as ScreenModalFormProps).isForm === true;
  const isSimpleModal =
    (props as SimpleModalLoaderProps).isSimpleModal === true;
  const closeModal = (props as ScreenModalFormProps).closeModal;
  const showCancel = (props as ScreenModalFormProps).showCancel;

  // States
  const [scrollPosition, setScrollPosition] = useState(
    typeof window !== "undefined" ? window.pageYOffset : 0
  );
  const [keyboardOffset, setKeyboardOffset] = useState(0);

  // Use effect to cover whole screen according to the page offset
  useEffect(() => {
    // Function to update the scroll position state
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    // Function to handle when the keyboard is opened
    const handleFocusIn = () => {
      // Adjusting the keyboardOffset value when the keyboard is opened
      setKeyboardOffset(200);
    };

    // Function to handle when the keyboard is closed
    const handleFocusOut = () => {
      // Resetting the keyboardOffset value when the keyboard is closed
      setKeyboardOffset(0);
    };

    // Disabling scrolling on the main document when the modal is open
    document.documentElement.style.overflow = "hidden";

    // Adding event listeners
    document.addEventListener("scroll", handleScroll);

    // Adding focus event listeners for mobile devices only
    if (window.innerWidth < 768) {
      window.addEventListener("focusin", handleFocusIn);
      window.addEventListener("focusout", handleFocusOut);
    }

    // Cleanup function to remove event listeners and restore scroll behavior
    return () => {
      document.removeEventListener("scroll", handleScroll);

      if (window.innerWidth < 768) {
        window.removeEventListener("focusin", handleFocusIn);
        window.removeEventListener("focusout", handleFocusOut);
      }

      // Re-enabling scrolling on the main document
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className={`${className} absolute left-0 z-50 flex flex-col items-center justify-center w-full py-6 h-svh bg-black/80 PRINT`}
      style={{ top: `${scrollPosition - keyboardOffset}px` }}
    >
      {/* CLOSE BUTTON */}
      {(isForm || isSimpleModal) && closeModal && showCancel && (
        <CloseButton closeModal={closeModal} />
      )}

      {/* REST OF THE CHILDREN */}
      {props.children}
    </div>
  );
};

export default ScreenModal;

// Close modal button
const CloseButton: React.FC<{ closeModal: () => void }> = ({ closeModal }) => (
  <div
    className="w-[95%] max-w-96 text-right p-2 relative top-3 rounded-lg"
    style={getBgColor("primary")}
  >
    <button onClick={closeModal}>
      <IoMdClose size={"2rem"} color="#ffffff" />
    </button>
  </div>
);
