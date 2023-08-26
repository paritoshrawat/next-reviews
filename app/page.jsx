import Link from "next/link";
import Heading from "../components/Heading";
import { getFeaturedReview } from "../lib/reviews";

export default async function HomePage() {
  const review = await getFeaturedReview();
  console.log("page rendering");
  return (
    <>
      <Heading>INDIE GAMER</Heading>
      <p className="pb-3">only the best indie gamer reviewed for you</p>
      <div className="border rounded bg-white w-80 shadow hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className=" rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className=" font-orbitron font-semibold text-center py-1 sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
