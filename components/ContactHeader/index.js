const Index = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-3/5 bg-brandBlue lg:p-12 xl:pl-40 p-8">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">CONTACT</p>
          <h1 className="uppercase text-white text-4xl font-semibold">
            Get In Touch
          </h1>
          <p className="text-white text-lg mt-8 font-semibold">
            Email Fleischer Scholars with any questions or inquiries. We are more than happy to answer any and all of your questions.
          </p>
          <div className="flex flex-col lg:flex-row justify-between pt-16">
            <div className="flex items-center">
              <img src="/static/img/incomingcall.svg" />
              <p className="pl-4 text-white">
                <b>Phone:</b> (480) 471-0090
              </p>
            </div>
            <div className="flex items-center mt-8 lg:mt-0">
              <img src="/static/img/contactemail.svg" />
              <p className="pl-4 text-white">
                <b>Email:</b> amandam@fleischer.org
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="bg-center bg-no-repeat bg-cover rounded lg:w-2/5 w-full mobilebackgrounds"
        style={{ backgroundImage: `url(${'/static/img/contactemail.png'})` }}
      ></div>
    </div>
  );
};
export default Index;
