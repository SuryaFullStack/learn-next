"use client";
import { useRouter } from "next/navigation";

export default function PlaceOrder() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order Placed");
    router.push("/");
  };

  return (
    <>
      <h1>Place Order</h1>
      <button
        onClick={handleClick}
        className="bg-red-500 text-white p-2 rounded"
      >
        Place Order
      </button>
    </>
  );
}
