import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold text-gray-800">Reviews</h3>
      {reviews.length === 0 ? (
        <p className="text-gray-600 mt-2">No reviews yet.</p>
      ) : (
        reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 mb-4">
            <div className="flex items-center">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">{review.name}</p>
                <p className="text-yellow-500">★ {review.rating}</p>
              </div>
            </div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;