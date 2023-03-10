import * as React from "react";

export /*bundle*/ const Recommendations = ({ src, alt, paragraph, name, job }) => {
  return (
    <div className="recommendations">
      <div className="container-img">
        <img className="recommendations__img" src={src} alt={alt} />
      </div>
      <p className="recommendations__p">{paragraph}</p>
      <span className="recommendations__span">
        {name}-<strong>{job}</strong>
      </span>
    </div>
  );
};
