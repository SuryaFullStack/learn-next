import { Suspense } from "react";
import Post from "@/components/Post";
import Reviews from "@/components/Reviews";

export default function PostDetails() {
  return (
    <div>
      <h1>Post Details Page</h1>
      <Suspense fallback={<p>Loading post details...</p>}>
        <Post />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Reviews />
      </Suspense>
    </div>
  );
}
