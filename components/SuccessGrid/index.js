import Form from "../ContactForm";
import OrangeButton from "../NewMockupComponents/OrangeButton";
import ReactPlayer from "react-player/youtube";
const Index = () => {
  return (
    <div>
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 bg-brandBlue flex justify-center py-32 px-4 lg:px-8 xl:px-12 xl:pl-40">
          <div data-aos="fade-down">
            <p className="uppercase text-white text-lg mb-4">
              fleischer scholars
            </p>
            <h1 className="text-white text-4xl font-semibold">In the news</h1>
            <p className="text-white text-2xl mt-8">
              The Fleischer Scholars Program is Proud to Present a{" "}
              <b>Selection of Links</b> to Publications Discussing the{" "}
              <b> Program and its Success.</b>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full lg:w-1/2  bg-no-repeat bg-center bg-cover mobilebackgrounds flex items-center justify-center"
          style={{ backgroundImage: `url(${"/static/img/successNews.png"})` }}
        >
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/L0h6VcJWcr4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            className="react-player"
            url={"https://www.youtube.com/watch?v=L0h6VcJWcr4"}
            light={"/static/img/successCreatedPlaceholder.jpeg"}
            playing={true}
            controls={true}
          />
        </div>
      </div>

      <div className="container mx-auto lg:px-32 flex flex-wrap justify-between pt-24 px-4">
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsOne.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            Fleischer Scholars Experience Entrepreneurship and College Life
          </p>
          <div className="w-full flex">
            <a target="_blank" href="https://news.uark.edu/articles/34943/fleischer-scholars-experience-entrepreneurship-and-college-life">
              <OrangeButton>
                READ MORE
                <i className="fa fa-arrow-right ml-2"></i>
              </OrangeButton>
            </a>
          </div>
        </div>
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsTwo.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            Walton College of Business Scholarship Reaches Out to
            'Underrepresented'
          </p>
          <div className="w-full flex">
            <a target="_blank" href="https://www.arkansasbusiness.com/article/111127/walton-college-of-business-scholarship-reaches-out-to-underrepresented">
              <OrangeButton>
                READ MORE
                <i className="fa fa-arrow-right ml-2"></i>
              </OrangeButton>
            </a>
          </div>
        </div>
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsThree.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            Walton College Partners with Signature Bank to Provide Three
            Fleischer Scholarships for Area Youth
          </p>
          <div className="w-full flex">
            <a target="_blank" href="https://news.uark.edu/articles/34707/walton-college-partners-with-signature-bank-to-provide-three-fleischer-scholarships-for-area-youth">
              <OrangeButton>
                READ MORE
                <i className="fa fa-arrow-right ml-2"></i>
              </OrangeButton>
            </a>
          </div>
        </div>
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsFour.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            Summer Program Prepares Teens for College
          </p>
          <div className="w-full flex">
            <a target="_blank" href="https://www.statepress.com/article/2012/06/high-schoolers-experience-business-school-through-summer-program">
              <OrangeButton>
                READ MORE
                <i className="fa fa-arrow-right ml-2"></i>
              </OrangeButton>
            </a>
          </div>
        </div>
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsFive.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            Olin Business Magazine
          </p>
          <div className="w-full flex">
            <OrangeButton>
              READ MORE
              <i className="fa fa-arrow-right ml-2"></i>
            </OrangeButton>
          </div>
        </div>
        <div className="w-full md:w-thirtyPercent mb-20">
          <div
            className="w-full h-60 bg-cover bg-center bg-no-repeat shadow-newsCard"
            style={{
              backgroundImage: `url(${"/static/img/newsSix.png"})`,
            }}
          />
          <p className="text-brandBlue mt-2">News</p>
          <p className="font-semibold text-brandBlue text-base mt-2 gridDesc">
            TMCF and Strada Pilot New Scholars Program
          </p>
          <div className="w-full flex">
            <a target="_blank" href="https://www.tmcf.org/events-media/tmcf-in-the-media/tmcf-and-strada-pilot-new-scholars-program/">
              <OrangeButton>
                READ MORE
                <i className="fa fa-arrow-right ml-2"></i>
              </OrangeButton>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap pb-12">
        <div className="lg:w-1/2 bg-white flex justify-center py-32 px-4 lg:px-8 xl:px-12 xl:pl-40">
          <div data-aos="fade-down">
            <h1 className="text-brandBlue text-4xl font-semibold">
              Fleischer Scholars Student Created Videos
            </h1>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-full lg:w-1/2  bg-no-repeat bg-center bg-cover mobilebackgrounds flex items-center justify-center"
        //   style={{ backgroundImage: `url(${'/static/img/successHeader.png'})` }}
        >
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kJhbnGKEWpQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
          <ReactPlayer
            className="react-player"
            url={"https://www.youtube.com/watch?v=kJhbnGKEWpQ"}
            light={"/static/img/successNewsVideoPlaveHolder.png"}
            playing={true}
            controls={true}
          />
        </div>
      </div>

      <Form />
      <div className="container mx-auto px-32 bg-themeGray">
        <div className="border-b border-inputBorder w-full    "></div>
      </div>
    </div>
  );
};
export default Index;


// transition text - [15px] h - [45px] text - white cursor - pointer  flex justify - center items - center bg - gradient hover: bg - gradient - darken  py - 2 px - 8 rounded - 3xl

// transition text-[15px] h-[45px] text-white cursor-pointer  flex justify-center items-center bg-gradient hover:bg-gradient-darken  py-2 px-8 rounded-3xl