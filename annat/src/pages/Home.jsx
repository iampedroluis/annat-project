import videohero from "../video/videohero.mp4";
import AboutUs from "./AboutUs";

export const Home = () => {
  return (
    <>
      <div className="relative h-screen">
        <video
          src={videohero}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center text-white text-center">
          <div className="ml-10 mb-20 text-left">
            <h1 className="text-8xl md:text-9xl">Unique</h1>
            <h1 className="text-5xl md:text-9xl">
              designer <span className="italic">candles</span>
            </h1>
          </div>
          <div className="absolute inset-x-0 bottom-3 flex-col items-center justify-center text-white">
            <p className="mr-2">
              <a href="#us">See More</a>
            </p>
            <a href="#us">
              <i className="fa-solid fa-chevron-down"></i>
            </a>
          </div>
        </div>
      </div>
      <AboutUs />
    </>
  );
};
