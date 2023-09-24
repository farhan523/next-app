/*---> Component <---*/
export const DesktopJoinEvent = () => {
  return (
    <div className={MainWrapper}>
      <div className={ImageWrapper}>
        {/* <img src={"/static/join-community.svg"} /> */}
        <div className="flex flex-col h-full items-center relative">
          <div className="mb-6 w-full justify-center flex items-center">
            <img
              src="/static/img/join-event-pic1.png"
              className="rounded-2xl object-cover h-[210px] w-[280px] lg:w-[280px]"
            />
          </div>
          <div className="flex items-start w-full">
            <img
              src="/static/img/join-event-pic2.png"
              className="rounded-2xl object-cover h-[210px] w-[280px] mr-6"
            />
            <img
              src="/static/img/join-event-pic3.png"
              className="rounded-2xl object-cover h-[130px] w-[240px] "
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

/*---> Styles <---*/
const MainWrapper = `
border-[red]
pr-[50px]
pl-[100px]
pb-[100px]
hidden
lg:flex
justify-between
items-center
2xl:pl-[300px]
2xl:pr-[150px]
`;

const TextWrapper = `
border-[yellow]
w-[45%]
mt-[153px]
`;

const ImageWrapper = `
border-[yellow]
w-[45%]
mt-[32px]
flex
justify-center
items-center
h-full
mr-6
`;

const Title = `
border-[red]
text-[30px]
xl:text-[35px]
text-[#126CAB]
font-[900]
leading-[110%]
mb-[40px]
xl:mb-[91px]
`;

const Text = `
border-[red]
text-[15px]
text-[#002E4E]
font-[300]
leading-[23px]
mb-[57px]
lg:max-w-[428px]
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
