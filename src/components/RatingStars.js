import React from "react";
import PropTypes from "prop-types";
import { equals, cond, always, T } from "ramda";

export const RatingStars = ({ ratingString }) => {
  const rating = ratingString.toLowerCase();

  const renderStarsWithFilledStars = (filledStarsCount) => (
    <div className="flex flex-row justify-center">
      {Array.from({ length: 4 }, (_, index) => (
        <StarFilled key={index} filled={index < filledStarsCount} />
      ))}
    </div>
  );

  const renderEmptyStars = (
    <div className="flex flex-row justify-center">
      {Array.from({ length: 4 }, (_, index) => (
        <StarEmpty key={index} />
      ))}
    </div>
  );

  const renderStars = cond([
    [equals("très bien"), always(renderStarsWithFilledStars(4))],
    [equals("bien"), always(renderStarsWithFilledStars(3))],
    [equals("assez bien"), always(renderStarsWithFilledStars(2))],
    [equals("mauvaise état"), always(renderStarsWithFilledStars(1))],
    [T, always(renderEmptyStars)],
  ]);

  return <div>{renderStars(rating)}</div>;
};

const StarFilled = ({ filled }) => (
  <svg
    aria-hidden="true"
    className={`w-5 h-5 ${filled ? "text-orange-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>First star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

const StarEmpty = () => (
  <svg
    aria-hidden="true"
    className="w-5 h-5 text-gray-300 dark:text-gray-500"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Fifth star</title>
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);

RatingStars.propTypes = {
  ratingString: PropTypes.string.isRequired,
};

StarFilled.propTypes = {
  filled: PropTypes.bool.isRequired,
};
