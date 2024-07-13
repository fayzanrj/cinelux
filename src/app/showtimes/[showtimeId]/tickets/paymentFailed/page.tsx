import PaymentFailed from "@/components/payment/PaymentFailed";
import { redirect } from "next/navigation";

// Props
interface PaymentFailedPageProps {
  searchParams: {
    bookingId: string;
  };
}

const PaymentFailedPage = ({ searchParams }: PaymentFailedPageProps) => {
  // Destructuring
  const { bookingId } = searchParams;

  if (!bookingId || bookingId.length !== 4) redirect("/");

  return <PaymentFailed bookingId={bookingId} />;
};

export default PaymentFailedPage;
