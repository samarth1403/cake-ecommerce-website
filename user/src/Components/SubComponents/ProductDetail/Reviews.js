import React from 'react';
import ReactStars from "react-rating-stars-component";

const Reviews = () => {
    const renderedCustomerReviewList = customerReviewList.map((review)=>{
        return (
          <div
            // style={{
            //   background:
            //     "linear-gradient(89.14deg, #FFFA84 0.66%, #FFFEDB 99.26%)",
            // }}
            className="bg-[#fff] w-[300px] h-auto flex flex-col flex-wrap justify-center items-start rounded-[20px] m-4 p-4"
          >
            <p className="font-roboto font-bold text-[#0D103C] text-lg m-2">
              {review.Name}
            </p>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={review.Rating}
              size={28}
              isHalf={true}
              edit={false}
              a11y={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
            //   activeColor="#0D103C"
            activeColor="#ffd700"
              classNames="mx-2"
            />
            <p className="font-roboto font-medium text-[#0D103C] text-lg m-2">
              {review.Comment}
            </p>
          </div>
        );
    })
  return (
    <div className="flex flex-col flex-no-wrap justify-center items-center">
      <div className="flex flex-col flex-no-wrap justify-center items-center">
        <p className="font-roboto font-bold text-[#FEE77A] text-3xl m-6 text-center">
          Write a Review
        </p>
        <div className="flex flex-row flex-wrap justify-center items-center">
          <p className="font-roboto font-bold text-[#FEE77A] text-2xl m-4 text-center">
            Rating :
          </p>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            value={4.5}
            size={36}
            isHalf={true}
            edit={false}
            a11y={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ECD400"
          />
        </div>
        <input
          className="font-roboto font-[400] text-xl rounded-[15px] bg-[#fff] w-[300px] lg:w-[400px] h-[75px] text-[#0D103C]
            text-start p-4 m-4"
          id="comment"
          type="text"
          placeholder="Enter Your Name"
        />
        <textarea
          className="font-roboto font-[400] text-xl rounded-[15px] bg-[#fff] w-[300px] lg:w-[400px] h-[150px] text-[#0D103C]
            text-start p-4 m-4"
          id="comment"
          type="text"
          placeholder="Enter Your Comment"
        />
        <button
          style={{
            background: "linear-gradient(180deg, #FFEFEF 0%, #E5FE49 100%)",
          }}
          className="w-[135px] h-[75px] font-roboto font-bold text-2xl text-[#0D103C] rounded-[20px]  px-4 m-4 align-left"
        >
          Submit
        </button>
        <div className="flex justify-center">
          <hr className="w-[360px] sm:w-[500px] md:w-[700px] lg-w-[1000px] my-8" />
        </div>
        <p className="font-roboto font-bold text-[#FEE77A] text-3xl m-6 text-center">
          Customer Reviews
        </p>
        <div className="flex flex-row flex-wrap justify-center items-start m-4">
          {renderedCustomerReviewList}
        </div>
      </div>
    </div>
  );
}

export default Reviews

const customerReviewList = [
  {
    Name: "Samarth Ikkalaki",
    Rating: 4.5,
    Comment:
      "Your cake was very delicious . I loved it very much .Your cake was very delicious . I loved it very much .",
  },
  {
    Name: "Samarth Ikkalaki",
    Rating: 3,
    Comment: "Your cake was very delicious . I loved it very much .",
  },
  {
    Name: "Samarth Ikkalaki",
    Rating: 2,
    Comment: "Your cake was very delicious . I loved it very much .",
  },
  {
    Name: "Samarth Ikkalaki",
    Rating: 5,
    Comment: "Your cake was very delicious . I loved it very much .",
  },
  {
    Name: "Samarth Ikkalaki",
    Rating: 4,
    Comment: "Your cake was very delicious . I loved it very much .",
  },
  {
    Name: "Samarth Ikkalaki",
    Rating: 4,
    Comment: "Your cake was very delicious . I loved it very much .",
  },
];