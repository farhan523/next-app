import Link from "next/link"
const Index = () => {
  return (
    <div className="py-48 px-4">
      <div className="xl:hidden sm:w-1/3 mx-auto">
        <img src="/static/img/bookPhoto.png" />
      </div>
      <div className="flex justify-end">
        <div className="container mr-0 flex justify-end">
          <div className="w-full lg:w-8/12 relative bg-themeGray pl-4 pr-4 lg:pl-44 xl:pr-44">
            <p
              className="text-brandBlue text-2xl pt-24 lg:pl-20"
              data-aos="fade-down"
            >
              GET THE BOOK
            </p>
            <h1
              className="text-5xl pt-10 font-semibold pb-4 text-brandBlue  lg:pl-20"
              data-aos="fade-down"
            >
              Build Your Mental Balance Sheet
            </h1>
            <Link href="/the-book">
              <a>
                <button
                  className="orangeButton -mb-12 mt-20 text-xl focus:outline-none lg:ml-20"
                  data-aos="fade-down"
                >
                  GET THE BOOK
            </button>
              </a>
            </Link>
            <img
              data-aos="fade-up"
              src="/static/img/bookPhoto.png"
              className="bookPhoto absolute hidden xl:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
