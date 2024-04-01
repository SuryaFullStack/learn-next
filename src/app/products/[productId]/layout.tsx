export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Product</h2>
      {/* Crousel here... */}
    </>
  );
}
