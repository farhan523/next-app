import ReactPlayer from 'react-player/youtube'
const Index = () => {
  return (
    <div className="flex flex-wrap">
      <div className="lg:w-1/2 bg-brandBlue flex justify-center py-32 px-4 lg:px-8 xl:px-12 xl:pl-40">
        <div data-aos="fade-down">
          <p className="uppercase text-white text-lg mb-4">
            fleischer scholars
          </p>
          <h1 className="text-white text-4xl font-semibold">Success Stories</h1>
          <p className="text-white text-lg mt-8">
            Each student has a unique story to tell about their journey. Here are a few stories from former Fleischer Scholars to encourage you to be inspired and pursue your own educational journey. Dare to dream and believe in yourself.
          </p>
        </div>
      </div>
      <div
        data-aos="fade-down"
        className="w-full lg:w-1/2  bg-no-repeat bg-center bg-cover mobilebackgrounds flex items-center justify-center"
        style={{ backgroundImage: `url(${'/static/img/successHeader.png'})` }}
      >
        <ReactPlayer
          className='react-player'
          url={'https://www.youtube.com/watch?v=8KHpQGQ03RA'}
          light={'/static/img/successHeaderVideoPlaceHolder.png'}
          playing={true}
          controls={true}
        />
      </div>
    </div>
  );
};
export default Index;
