"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <>
      <h1>Error in reviewId : {error.message}</h1>
      <button onClick={reset} className="bg-red-500 text-white p-2 rounded">
        Try Again
      </button>
    </>
  );
}
