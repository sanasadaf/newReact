import React from "react";
import "./Homepage.css";

const Homepage = ({ showSuccessToast }) => {
  const handleButtonClick = () => {
    showSuccessToast();
  };

  return (
    <div className="homepage-container">
      <h1>
        Discover Your Style,
        <br /> Uncover Your Story
      </h1>
      <div className="passage">
        <p>
          Step into a world where fashion meets literature at Discover Your
          Style, Uncover Your Story.
          <br /> Our curated collection seamlessly blends the latest trends in
          clothing with captivating narratives in books.
        </p>
        <button onClick={handleButtonClick}>Show Success Toast</button>
      </div>
    </div>
  );
};

export default Homepage;
