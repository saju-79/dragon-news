// import { FaStar, FaEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";

const NewsCard = ({ news }) => {
  if (!news) return null;

  const {
    title,
    thumbnail_url,
    rating,
    total_view,
    author,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-200">
      {/* Author Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold">{author?.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author?.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-gray-500">
            <CiShare2 />
         {/*  <FaBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" /> */}
        </div>
      </div>

      {/* Title */}
      <div className="px-4 pt-4">
        <h2 className="text-xl font-bold leading-snug hover:text-primary cursor-pointer">
          {title}
        </h2>
      </div>

      {/* Image */}
      <figure className="px-4 pt-4">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="card-body pt-4">
        <p className="text-gray-600 line-clamp-3">
          {details}
        </p>

        {/* Tags */}
        <p className="text-sm text-gray-500 mt-2">
          {tags?.map(tag => `#${tag}`).join(", ")}
        </p>

        <p className="text-primary font-medium cursor-pointer mt-1">
          Read More
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between border-t pt-4 mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
           {/*  {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating?.number ? "" : "text-gray-300"}
              />
            ))} */}
            <span className="text-gray-600 ml-2">
              {rating?.number}.0
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            {/* <FaEye /> */}
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
