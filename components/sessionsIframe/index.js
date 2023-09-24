import ReactPlayer from 'react-player/youtube'
import OrangeButton from '../NewMockupComponents/OrangeButton';
const Index = () => {
  return (
    <div className="py-28 bg-themeGray px-4 lg:px-0 sessionsVideo">
      <div className="container mx-auto flex justify-center items-center flex-wrap xl:px-32">
        <div
          className="w-full lg:w-1/2 md:pl-12 xl:pl-0 md:pr-12 xl:pr-28 videoCol"
          data-aos="fade-down"
        >
          {/* <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/0-mFxAP7Ebs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
           <ReactPlayer
              className='react-player'
              url={'https://www.youtube.com/watch?v=0-mFxAP7Ebs'}
              light={'/static/img/successUpcomingPlaceHolder.png'}
              playing={true}
              controls={true}
              style={{width:"100%"}}
            />
        </div>
        <div className="lg:w-1/2	w-full pt-8 lg:pt-0" data-aos="fade-up">
          <h1 className="text-brandBlue text-2xl leading-relaxed	">
            Click to View Participating Universities and Upcoming Fleischer
            Scholars Sessions
          </h1>
          <OrangeButton href="/upcoming-sessions#applySection" className="w-fit orangeButton text-base mt-8 uppercase" >
            VIEW universities
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};
export default Index;
