import Picture4 from "./assets/picture4.jpg";
import "./FeatureA.css";

const FeatureA = () => {
  return (
    <div>
      <section className="text-gray-600 body-font m-12">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-right mb-16 md:mb-0 items-center text-center">
            <div className="w-full text-right">
              <h1
                id="feature1title"
                className="justify-self-end sm:text-6xl text-3xl mb-4 font-medium text-gray-900"
              >
                Residential designs
              </h1>
            </div>

            <p id="feature1p" className="mb-8 leading-relaxed text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              esse, mollitia aperiam, delectus laboriosam modi impedit beatae
              provident ex voluptatem, tempora reiciendis quas soluta minus
              explicabo animi vitae dignissimos quam?
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded drop-shadow-2xl"
              alt="hero"
              src={Picture4}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureA;
