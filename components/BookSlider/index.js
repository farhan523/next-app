import Carousel from 'react-multi-carousel';
const Index = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <div className="bg-themeGray py-24">
      <h1
        className="text-brandBlue text-3xl lg:text-4xl pb-24 font-semibold text-center aos-init aos-animate"
        data-aos="fade-up"
      >
        What People are Saying
      </h1>
      <Carousel
        responsive={responsive}
        arrows={false}
        partialVisible={true}
        itemClass={'cursor-pointer'}
      >
        <div className="bg-brandBlue p-4 rounded-lg md:mr-5 mx-3 lg:h-44flex items-center">
          <p className="text-white text-center text-base ">
            “There are life lessons on each page – I could put myself in the
            pages and find much better and clearer who am I, what I could have
            done differently and what I need to do different. I will keep this
            book as my guide for long time to come.” – Mahendra G
          </p>
        </div>
        <div className="bg-brandBlue p-4 rounded-lg md:mr-5 mx-3 lg:h-44 flex items-center">
          <p className="text-white text-center text-base ">
            “Dear Mort: You are truly a man for all seasons. Your fine book
            should ideally be included in high-school curricula nation-wide.
            Most of today’s young generation has no idea that free enterprise
            made America great!” – William F
          </p>
        </div>
        <div className="bg-brandBlue p-4 rounded-lg md:mr-5 mx-3 lg:h-44flex items-center">
          <p className="text-white text-center text-base ">
            “A wonderful real life parable valuable to anyone of any age in any
            circumstance. Thank you for sharing this with me. I particularly
            appreciate the Huck Finn references and plugs for Midwestern
            values…” – Einar S
          </p>
        </div>
        <div className="bg-brandBlue p-4 rounded-lg md:mr-5 mx-3 lg:h-44 flex items-center ">
          <p className="text-white text-center text-base ">
            “Thank you for taking the time to accumulate your experiences. Yours
            is an aspiring story! I learned a great deal from reading it, as
            well as the Flesicher Scholars.” – Brent W
          </p>
        </div>
      </Carousel>
    </div>
  );
};
export default Index;
