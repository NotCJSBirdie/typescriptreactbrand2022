import "./Header.css";
// import "./css/styles.css";

const Header = () => {
  return (
    <div className="header">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span id="brand" className="ml-3 text-9xl">
              HEART AND SOUL
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a id="headerlink" className="mr-5 hover:text-gray-900">
              ABOUT
            </a>
            <a id="headerlink" className="mr-5 hover:text-gray-900">
              SHOWCASE
            </a>
            <a id="headerlink" className="mr-5 hover:text-gray-900">
              WORK WITH US
            </a>
            <a id="headerlink" className="mr-5 hover:text-gray-900">
              BLOG
            </a>
            <a id="headerlink" className="mr-5 hover:text-gray-900">
              CONTACT
            </a>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
