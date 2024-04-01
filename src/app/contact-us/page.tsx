import { cookies } from "next/headers";

export default function ContactUs() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log("theme", theme?.value);
  console.log("Contact Us Page server component");
  return <h1>Contact Us {new Date().toLocaleTimeString()}</h1>;
}
