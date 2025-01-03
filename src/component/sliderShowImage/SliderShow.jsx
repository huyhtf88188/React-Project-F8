import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SliderShow = () => {
  const images = [
    "https://file.hstatic.net/1000253775/file/banner_jean_160_dk.jpg",
    "https://file.hstatic.net/1000253775/file/tangvo_dk_72e75c3592884cb8b4a5b27d9afe4f75.jpg",
    "https://file.hstatic.net/1000253775/file/address_dk_new.jpg",
  ];

  return (
    <div className="container mx-auto max-w-7xl px-4 mt-10 mb-10">
      <Slide easing="ease" indicators={true} autoplay={true} duration={3000}>
        {images.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[500px] object-cover"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default SliderShow;
