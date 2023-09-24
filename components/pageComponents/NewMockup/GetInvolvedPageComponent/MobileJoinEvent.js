/*---> Component <---*/
export const MobileJoinEvent = () => {
  return (
    <div className={MainWrapper}>
      <div className={ImageWrapper}>
        {/* <img src={"/static/join-community.svg"} className={Image} /> */}
        <div className="flex flex-col h-full items-center relative">
          <div className="mb-6 w-full justify-center flex items-center">
            <img
              src="/static/img/join-event-pic1.png"
              className="rounded-2xl object-cover h-[120px] w-[160px] lg:w-[280px]"
            />
          </div>
          <div className="flex items-start w-full">
            <img
              src="/static/img/join-event-pic2.png"
              className="rounded-2xl object-cover h-[120px] w-[160px] mr-2"
            />
            <img
              src="/static/img/join-event-pic3.png"
              className="rounded-2xl object-cover h-[80px] w-[120px] "
            />
          </div>
          <div className="absolute bg-brandBlue1 h-full w-full blur-[125px] opacity-30 -z-10" />
        </div>
      </div>
      <div className={TextWrapper}>
        <div className={Title}>JOIN AN EVENT</div>
        <div className={Text}>
          Check out our upcoming events, including 5k walk/runs, hikes,
          marathons, and more!
        </div>
        <button className={Button}>Upcoming Events</button>
      </div>
    </div>
  );
};

const Image = `

border-[red]
ml-[40px]
sm:ml-[100px]
w-[70%]
sm:w-[80%]

`;

/*---> Styles <---*/
const MainWrapper = `
border-[red]
pb-[100px]
flex
flex-col
lg:hidden
`;

const TextWrapper = `
border-[yellow]
mt-[50px]
sm:mt-[100px]
flex
flex-col
items-center
px-[50px]
`;

const ImageWrapper = `
border-[yellow]
mt-[32px]
flex
justify-center
`;

const SubTitle = `
border-[red]
text-[20px]
sm:text-[25px]
text-[#126CAB]
font-[300]
leading-[109.4%]
mb-[14px]
`;

const Title = `
border-[red]
text-[20px]
sm:text-[30px]
xl:text-[35px]
text-[#126CAB]
font-[900]
leading-[110%]
mb-[20px]
sm:mb-[40px]
xl:mb-[91px]
`;

const Text = `
border-[red]
text-[15px]
text-[#002E4E]
font-[300]
leading-[23px]
mb-[40px]
sm:mb-[57px]
text-center
`;

const Button = `
border-[red]
text-[16px]
text-[white]
font-[600]
leading-[26px]
rounded-[25px]
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
w-[201px]
h-[42px]
`;
