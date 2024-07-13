import PaymentSuccess from "@/components/payment/PaymentSuccess";
import { redirect } from "next/navigation";

// Props
interface PaymentSuccessPageProps {
  searchParams: {
    bookingId: string;
  };
}

const PaymentSuccessPage = ({ searchParams }: PaymentSuccessPageProps) => {
  // Destructuring
  const { bookingId } = searchParams;

  if (!bookingId || bookingId.length !== 4) redirect("/");

  return <PaymentSuccess bookingId={bookingId} />;
};

export default PaymentSuccessPage;
