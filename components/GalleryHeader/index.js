const Index = () => {
  return (
    <div className="flex flex-wrap gallery-header">
      <div className="lg:w-1/2 bg-brandBlue flex justify-center py-32 px-4 lg:px-8 xl:px-12 xl:pl-40 items-center">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">
          FLEISCHER SCHOLARS
          </p>
          <h1 className="text-white text-4xl font-semibold">
          Flesicher Scholars Gallery
          </h1>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="w-full lg:w-1/2  bg-themeGray flex items-center justify-center lg:p-12 p-4 bg-no-repeat bg-center bg-cover mobilebackgrounds"
        style={{ backgroundImage: `url(${'/static/img/successHeader.png'})` }}
      >
        {/* <div className="gallery-header-image bg-cover bg-center bg-no-repeat"   style={{ backgroundImage: `url(${'/static/img/blogHeader.png'})` }}></div> */}
        
      </div>
    </div>
  );
};
export default Index;
