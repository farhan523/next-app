const Index = () => {
  return (
    <div className="py-12 lg:py-24 px-4 lg:px-8  relative">
      <img
        data-aos="fade-up"
        src="/static/img/bookHorseLeft.png"
        className="absolute left-0 hidden xl:block "
        style={{ width: '200px', top: '40%', zIndex: -1 }}
      />
      <img
        data-aos="fade-up"
        src="/static/img/bookHorseRight.png"
        className="absolute right-0 hidden xl:block"
        style={{ width: '200px', top: '40%', zIndex: -1 }}
      />
      <div className=" container mx-auto flex flex-wrap justify-between items-center xl:px-32 mb-20">
        <div className="lg:w-1/2 mb-4 lg:mb-0 lg:pr-8">
          <p
            className="text-lg text-brandBlue font-semibold"
            data-aos="fade-down"
          >
            “It gradually dawned on me, and it is much clearer these many years later, that the pace of increasing knowledge and change is getting faster and faster with each passing year. The recorded history of man in the modern world is roughly 6,000 years, yet the first ideas of a nation state (as advocated by Thomas Hobbes) only began to appear in 1650. The evolving world as we know it really didn’t begin until the mid-1800s, with economic thinkers such as Adam Smith and John Stuart Mill, who lived during the industrial revolution.
          </p>
        </div>
        <div className="lg:w-1/2 lg:pl-6" data-aos="fade-up">
          <img src="/static/img/bookCardOne.png" />
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between items-center xl:px-32">
        <div className="lg:w-1/2 mb-4 lg:mb-0 lg:pr-6" data-aos="fade-up">
          <img src="/static/img/bookCardTwo.png" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <p
            className="text-lg text-brandBlue font-semibold"
            data-aos="fade-down"
          >
            In relation to the recorded history of man, the world has moved at
            “light speed” since those times. For the students reading this book,
            the pace of increasing knowledge and change will move ever faster
            during your career. It is a critical skill (and asset for your
            Mental Balance Sheet) that you are able to adapt as the world around
            you changes.”
          </p>
        </div>
      </div>
    </div>
  );
};
export default Index;
