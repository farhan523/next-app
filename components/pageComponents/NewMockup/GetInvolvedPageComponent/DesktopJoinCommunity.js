/*---> Component <---*/
export const DesktopJoinCommunity = () => {
  return (
    <div className={MainWrapper}>
      <div className={TextWrapper}>
        <div className={SubTitle}>
          <div className="flex items-center">
            GET INVOLVED <div className="h-1 w-[40%] ml-6 bg-brandBlue1" />
          </div>
          <div className={Title}>JOIN OUR COMMUNITY</div>
        </div>
        <div className={Text}>
          Join our community and help us achieve our mission: to discover and
          advance a cure for each and every multiple myeloma patient
        </div>
        <button className={Button}>Join Here</button>
      </div>
      <div className={ImageWrapper}>
        <img src={"/static/img/join-community-with-bg.png"} />
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
w-[55%]
mt-[32px]
flex
justify-center
`;

const SubTitle = `
border-[red]
text-[25px]
text-[#126CAB]
font-[300]
leading-[109.4%]
mb-[14px]
`;

const Title = `
border-[red]
text-[30px]
xl:text-[35px]
text-[#126CAB]
font-[900]
leading-[110%]
mb-[40px]
mt-3
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
w-[168px]
h-[42px]
`;
