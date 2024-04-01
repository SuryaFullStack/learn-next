import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // absolute: "Blog",
    default: "Blog",
    template: "%s | Blog",
  },
};

export default function Blog() {
  return <h1>Blog</h1>;
}
