import Marquee from "react-fast-marquee";
import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
const Review = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="">
      <h2 className="text-5xl font-bold text-center">Review</h2>
      <Marquee pauseOnClick="true">
        <div className="h-[280px] my-6 flex gap-12">
          {data.map((reviewData) => (
            <ReviewCard
              key={reviewData.id}
              reviewData={reviewData}
            ></ReviewCard>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
