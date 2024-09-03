import { useState, useEffect } from "react";
import Image01 from "../../images/DisplayImage01.webp";
import Image02 from "../../images/DisplayImage02.webp";
import Image03 from "../../images/DisplayImage03.webp";
import Image04 from "../../images/johan_343_vogue_photoshoot_of_beautiful_blonde_long_curl_haired_d153ef32-7f9f-42ce-9a4f-59b4d68be101.webp";
import Image06 from "../../images/DisplayImage06.webp";
import "./Display.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      image: Image02,
      title: "Slide 1",
    },
    { image: Image01, title: "Slide 2" },
    { image: Image03, title: "Slide 3" },
    { image: Image04, title: "Slide 4" },
    { image: Image06, title: "Slide 5" },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 3500);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider container-fuild">
      <div className="slider-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="prev" onClick={handlePreviousSlide}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="next" onClick={handleNextSlide}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Slider;
