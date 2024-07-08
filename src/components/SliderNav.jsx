import React, { useState, useEffect, useRef } from "react";

const SliderNav = () => {
  const imgsRef = useRef([]);
  const [n, setN] = useState(0);

  useEffect(() => {
    const changeSlide = () => {
      imgsRef.current.forEach((img, index) => {
        if (img) {
          img.style.display = index === n ? "block" : "none";
        }
      });
    };

    imgsRef.current.forEach((img, index) => {
      if (img) {
        img.style.display = "none";
      }
    });
    if (imgsRef.current[0]) {
      imgsRef.current[0].style.display = "block";
    }

    changeSlide();
    return () => {};
  }, [n]);

  return (
    <div className="slider">
      <button
        className="control_prev"
        onClick={() => setN(n > 0 ? n - 1 : imgsRef.current.length - 1)}
      >
        &#8592;
      </button>
      <button
        className="control_next"
        onClick={() => setN(n < imgsRef.current.length - 1 ? n + 1 : 0)}
      >
        &#8594;
      </button>
      <ul>
        {[
          "header4.jpg",
          "header2.jpg",
          "header3.jpg",
          "header5.jpg",
          "header1.jpg",
        ].map((src, index) => (
          <img
            key={index}
            className="img-slider"
            ref={(el) => (imgsRef.current[index] = el)}
            src={`./assets/${src}`}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default SliderNav;