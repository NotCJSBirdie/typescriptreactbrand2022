import Insta1 from "./assets/insta1.jpg";
import Insta2 from "./assets/insta2.jpg";
import Insta3 from "./assets/insta3.jpg";
import "./Insta.css";

const Insta = () => {
  return (
    <div className="m-8 w-3/4">
      <div className="w-full text-right">
        <h1 id="instatitle" className="z-50 relative  bottom-8 text-5xl">
          Insta with us
        </h1>
        <h2 id="instausername" className="z-50 relative  bottom-8 text-lg">
          @HEARTANDSOUL
        </h2>
      </div>

      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden shadow-2xl">
            <img
              alt="content"
              className="object-cover object-center h-full w-full "
              src={Insta1}
            />
          </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden shadow-2xl">
            <img
              alt="content"
              className="object-cover object-center h-full w-full "
              src={Insta2}
            />
          </div>
        </div>
        <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
          <div className="rounded-lg h-64 overflow-hidden shadow-2xl">
            <img
              alt="content"
              className="object-cover object-center h-full w-full "
              src={Insta3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insta;
