import "./FeatureB.css";
import Picture5 from "./assets/picture5.jpg";

const FeatureB = () => {
  return (
    <div>
      <section className="text-gray-600 body-font m-12">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded drop-shadow-2xl"
              alt="hero"
              src={Picture5}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="w-full text-left">
              <h1
                id="feature2title"
                className="sm:text-6xl text-3xl mb-4 font-medium text-gray-900"
              >
                Commercial Spaces
              </h1>
            </div>

            <p id="feature2p" className="mb-8 leading-relaxed text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              esse, mollitia aperiam, delectus laboriosam modi impedit beatae
              provident ex voluptatem, tempora reiciendis quas soluta minus
              explicabo animi vitae dignissimos quam?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureB;
