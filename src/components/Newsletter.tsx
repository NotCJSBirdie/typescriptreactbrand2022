import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div>
      <h1
        id="newslettertitle"
        className="z-50 relative top-32 left-16 text-3xl w-full h-auto"
      >
        News for the heart and soul for your home
      </h1>
      <div id="newsletterbg" className="relative left-80 z-0 p-32 w-3/4"></div>
      <section className="text-gray-600 body-font m-6 relative z-40 bottom-36 left-36 w-4/6">
        <div className="container border-2 border-black px-2 py-12 mx-auto items-center">
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <input
                placeholder="Email"
                type="text"
                id="newsletteremail"
                name="newsletteremail"
                className="border-b-2 border-black w-full bg-transparent    focus:bg-transparent  text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <button
              id="newsletterbutton"
              className="text-black  border-b-2 border-black px-2 py-2  focus:outline-none  text-md"
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
