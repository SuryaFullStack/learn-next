import { notFound } from "next/navigation";

// function getRandomInt(max: number) {
//     return Math.floor(Math.random() * max);
// }

export default function ReviewDetails({
  params,
}: {
  params: { productId: string; reviewId: number };
}) {
  // const random = getRandomInt(2);
  // console.log('random', random);
  // if(random === 1) {
  //     throw new Error('Error in loading review');
  // }
  if (params.reviewId > 9) {
    return notFound();
  }
  return (
    <h1>
      Review {params.reviewId} for product {params.productId}
    </h1>
  );
}
