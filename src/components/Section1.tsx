import "./Section1.css";

const Section1 = () => {
  return (
    <div>
      <div id="section1box" className="px-64 py-32 w-3/4"></div>
      <section className="text-gray-600 body-font z-50 relative bottom-20 right-8">
        <div className="container mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <div className="border-2 border-black">
              <h1
                id="section1line"
                className="p-8 flex-grow sm:pr-16 text-xl font-medium title-font text-gray-900"
              >
                An empty room is a story waiting to happen, and you are the
                author.
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
