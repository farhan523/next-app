/*---> Component <---*/
export const MobileJoinCommunity = () => {
  return (
    <div className={MainWrapper}>
      <div className={ImageWrapper}>
        <img src={"/static/img/join-community-with-bg.png"} className={Image} />
      </div>
      <div className={TextWrapper}>
        <div className={SubTitle}>GET INVOLVED</div>
        <div className={Title}>JOIN OUR COMMUNITY</div>
        <div className={Text}>
          Join our community and help us achieve our mission: to discover and
          advance a cure for each and every multiple myeloma patient
        </div>
        <button className={Button}>Join Here</button>
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
w-[168px]
h-[42px]
`;
