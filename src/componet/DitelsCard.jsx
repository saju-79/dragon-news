 import React from 'react';
import { Link } from 'react-router';
 
 const DitelsCard = ({singleDitels}) => {
     const {
    title,
    image_url,
    details,
    tags,
    author,
    category_id ,
  } = singleDitels;

  return (
    <div className=" w-full my-10 px-4">
      <div className="bg-white shadow-sm h-screen  rounded-md overflow-hidden">

        {/* Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-220 object-cover"
        />

        {/* Content */}
        <div className="p-8">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {title}
          </h1>

          {/* Meta Info */}
          <p className="text-lg text-accent mb-4">
            {new Date(author?.published_date).toDateString()} | Tag Cloud Tags:
            {tags?.map((tag, i) => (
              <span key={i} className="ml-1">
                {tag},
              </span>
            ))}
          </p>

          {/* Details */}
          <p className="text-primary text-xl leading-relaxed whitespace-pre-line">
            {details}
          </p>

          {/* Button */}
          <div className="mt-8">
           <Link to={`/caterogy/${category_id}`}> <button className="btn bg-secondary py-8 px-16 font-semibold  text-xl text-white">
              ← All news in this category
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
 };
 
 export default DitelsCard;