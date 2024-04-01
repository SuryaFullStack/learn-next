import Card from "@/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link href="/dashboard/archived">Archived</Link>
    </Card>
  );
}
