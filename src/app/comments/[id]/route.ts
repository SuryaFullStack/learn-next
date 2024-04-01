// import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  //   if (Number(params.id) > comments.length) {
  //     redirect("/comments");
  //   }
  const comment = comments.find((comment) => comment.id === Number(params.id));
  return new Response(JSON.stringify(comment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const comment = await request.json();
  const newComment = {
    ...comments.find((comment) => comment.id === Number(params.id)),
    ...comment,
  };
  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const newComments = comments.filter(
    (comment) => comment.id !== Number(params.id)
  );
  return new Response(JSON.stringify(newComments), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
