const Index = ({ headerImage, heading }) => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-1/2 bg-brandBlue flex justify-center py-16 px-4 lg:px-8 xl:px-12 xl:pl-40">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">
            fleischer scholars
          </p>
          <h1 className="text-white text-4xl font-semibold uppercase">
            {heading}
          </h1>
          <p className="text-brandOrange text-lg mt-8 font-semibold">
            The Fleischer Scholars Enrichment Program Offers:
          </p>
          <ul>
            <li className="flex items-center mt-12">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-base pl-12 text-white">
                <span className="font-semibold">
                  Virtual Summer Program to become familiar with Facilities,
                </span>{" "}
                learn about Degree Programs and most importantly Financial Aid Programs
              </p>
            </li>
            <li className="flex items-center mt-12">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-base pl-12 text-white">
                <span className="font-semibold">
                  Participate in an Entrepreneurial Team Project
                </span>{" "}
                – where teams present “Shark Tank” style at the end of the week
              </p>
            </li>
            <li className="flex items-center mt-12">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-base pl-12 text-white">
                <span className="font-semibold">
                  Local Businesses and Entrepreneurs
                </span>{" "}
                - will Share Insights into Business and what it means to be a Community Leader and Role Model
              </p>
            </li>
            <li className="flex items-center mt-12">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: "#0067b2" }}></i>
                </div>
              </div>
              <p className="text-base pl-12 text-white" id="contactPageForm">
                <span className="font-semibold">
                  Learn How to Write your Personal Statement ,
                </span>{" "}
                Essays and More to assist with Applications to College
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2 bg-no-repeat bg-left bg-cover mobilebackgrounds"
        style={{
          backgroundImage: `url(${headerImage ? headerImage : "/static/img/peogramHeader.png"
            })`,
        }}
      ></div>
    </div>
  );
};
export default Index;
