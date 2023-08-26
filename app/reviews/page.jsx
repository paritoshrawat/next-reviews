import Link from "next/link";
import Heading from "../../components/Heading";
import { getReviews } from "../../lib/reviews";

export const metadata = {
  title: "Reviews",
};
export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="border rounded bg-white w-80 shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="mb-2 rounded-t"
              />
              <h2 className=" font-orbitron font-semibold text-center py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
