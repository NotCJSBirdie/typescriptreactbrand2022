import Picture1 from "./assets/picture1.jpg";
import Picture2 from "./assets/picture2.jpg";
import Picture3 from "./assets/picture3.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              src={Picture1}
              className="m-0 p-0 z-0 relative top-32 w-full shadow-2xl"
              alt="picture1"
            />
            <div className="z-10 relative bottom-48 right-32 border-2 border-black">
              <div className="p-4 px-72 py-32"></div>
            </div>
            <img
              src={Picture2}
              className="m-0 p-0 z-50 relative bottom-64 left-96 w-72 h-72 shadow-2xl"
              alt="picture2"
            />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={Picture3}
              className="m-0 p-0 z-40 relative left-32  w-full h-72 shadow-2xl"
              alt="picture2"
            />
            <div className="z-0 relative left-8 bottom-32 border-2 border-black">
              <div className="p-4 px-72 py-32"></div>
            </div>
            <h1
              id="maintitle"
              className="z-50 relative bottom-52 text-5xl text-black"
            >
              Interior Design with heart and soul
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
