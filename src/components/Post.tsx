import React from "react";

const Post = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div>Post</div>;
};

export default Post;
