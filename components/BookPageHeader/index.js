const Index = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-1/2 bg-brandBlue flex justify-center py-16 px-4 lg:px-8 xl:px-12 xl:pl-40">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">
            fleischer scholars
          </p>
          <h1 className="text-white text-4xl font-semibold">The Book</h1>
          <p className="text-brandOrange text-xl mt-8">
            I have always believed we will never achieve the American dream until we figure out how to get these people who are less privileged economically into the mainstream.
          </p>
          <ul>
            <li className="flex  mt-12">
              <div>
                <div className="h-6 w-6 rounded-full flex items-center justify-center bg-white">
                  <i className="fa fa-check" style={{ color: '#0067b2' }}></i>
                </div>
              </div>
              <p className="text-sm pl-6 text-white">
              To illustrate his story, Morton Fleischer, Founder of Fleischer Scholars, wrote Building Your Mental Balance Sheet, a book written specifically for young students. Below is an excerpt from
                <span className="font-semibold">
                 &nbsp;Building Your Mental Balance Sheet:
                </span>{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2  mobilebackgrounds bg-themeGray flex items-center justify-center"

      >
        <img src="/static/img/headerBook.png " className="w-2/5" />
      </div>
    </div>
  );
};
export default Index;
