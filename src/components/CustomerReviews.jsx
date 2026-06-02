import "./CustomerReviews.css";

function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Building Contractor",
      review:
        "Excellent quality cement and TMT bars. Delivery was on time and pricing was very competitive.",
      rating: "★★★★★",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "Home Owner",
      review:
        "Ordered bricks and AAC blocks for my house construction. The process was smooth and hassle-free.",
      rating: "★★★★★",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "Civil Engineer",
      review:
        "Reliable supplier with genuine products. Their customer support team is highly responsive.",
      rating: "★★★★★",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">

        <h2 className="reviews-title">
          Customer <span>Reviews</span>
        </h2>

        <p className="reviews-subtitle">
          Trusted by builders, contractors, and homeowners across the region.
        </p>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.id}>
              <div className="review-rating">
                {review.rating}
              </div>

              <p className="review-text">
                "{review.review}"
              </p>

              <div className="review-user">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4>{review.name}</h4>
                  <span>{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CustomerReviews;