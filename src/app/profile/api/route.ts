import { type NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultPerPage", "10");
  const theme = request.cookies.get("theme");

  console.log("requestHeaders", requestHeaders.get("Authorization"));
  console.log("headerList", headerList.get("Authorization"));

  console.log("resultPerPage", cookies().get("resultPerPage"));
  console.log("theme", theme?.value);

  return new Response("<h1>Profile api data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
