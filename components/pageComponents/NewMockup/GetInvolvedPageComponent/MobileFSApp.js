/*---> Component <---*/
export const MobileFSApp = () => {
  return (
    <div className={MainWrapper}>
      <div className={ImageWrapper}>
        <img src={"/static/fs-logo.svg"} className={LogoImage} />
        <img src={"/static/img/fs-app.png"} className={MobileImage} />
      </div>
      <div className={TextWrapper}>
        <div className={SubTitle}>STAY UPDATED WITH</div>
        <div className={Title}>FLEISCHER SCHOLARS APP</div>
        <div className={Text}>
          <div className={TextTitle}>Fleischer Scholars Application</div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In risus, et
          at dictum praesent eget ante interdum volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </div>
        <div className={ButtonsWrapper}>
          <div>
            <button className={Button}>
              Fleisher Scholars{" "}
              <img
                src={"/static/external-link.svg"}
                className={ExternalLinkIcon}
              />
            </button>
          </div>
          <div className={AppStoreButtonsWrapper}>
            <img src={"/static/img/app-store.png"} className={AppStoreIcon} />
            <img
              src={"/static/img/google-store.png"}
              className={AppStoreIcon}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/*---> Styles <---*/
const MainWrapper = `
border-[red]
pb-[100px]
flex
flex-col
lg:hidden
bg-[#E5F0F7]
`;

const TextWrapper = `
border-[yellow]
mt-[30px]
flex
flex-col
items-center
`;

const ImageWrapper = `
border-[yellow]
mt-[50px]
md:mt-[100px]
flex
flex-col
justify-center
items-center
`;

const SubTitle = `
border-[red]
text-[20px]
sm:text-[25px]
text-[#0067B2]
font-[300]
leading-[109.4%]
mb-[14px]
`;

const Title = `
border-[red]
text-[20px]
sm:text-[30px]
xl:text-[35px]
text-[#0067B2]
font-[900]
leading-[110%]
mb-[40px]
xl:mb-[40px]
`;

const Text = `
border-[red]
text-[15px]
text-[#002E4E]
font-[300]
leading-[23px]
mb-[57px]
max-w-[80%]
md:max-w-[80%]
xl:max-w-[70%]
text-center
`;

const TextTitle = `
font-[600]
`;

const ButtonsWrapper = `
border-[red]
flex
flex-col
items-center
justify-center
`;

const Button = `
border-[red]
text-[16px]
text-[white]
font-[600]
leading-[26px]
rounded-[10px]
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
w-[202px]
h-[42px]
flex
items-center
justify-center

`;

const ExternalLinkIcon = `
ml-[20px]
`;

const AppStoreButtonsWrapper = `
border-[yellow]
flex
items-center
justify-center
gap-[20px]
mt-[20px]
`;

const AppStoreIcon = `
cursor-pointer
bg-black
flex
justify-center
items-center
py-2
px-3
rounded-[10px]
`;

const LogoImage = `
border-[red]
`;

const MobileImage = `
border-[red]
ml-[-40%]
`;
