import React from "react";
import PropTypes from "prop-types";

const WineCard = ({ wine }) => (
  <div className="rounded-3xl shadow-md">
    <div className="bg-stone-100 flex flex-col border rounded-3xl h-full justify-between">
      <div className="flex flex-col items-center m-10">
        {wine.data && (
          <img
            src={`data:${wine.contentType};base64,${wine.data}`}
            alt={wine.ref}
            className="cursor-pointer border-2 border-stone-300 rounded-3xl transition duration-1000 ease-in-out transform hover:scale-125"
          />
        )}

        <div className="flex flex-col items-center mt-7 text-center">
          <p className="font-serif font-bold text-xl mb-2 text-gray-500">
            {wine.name}
          </p>
          <p className="font-serif text-gray-700 text-base-sm mt-2">
            {wine.year}
          </p>
        </div>
      </div>
    </div>
    {/* <p>{wine.price}</p>
    <p>{wine.quality}</p> */}
  </div>
);

export default WineCard;

WineCard.propTypes = {
  wine: PropTypes.object.isRequired,
};