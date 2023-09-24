/*---> Component <---*/
export const DesktopFSApp = () => {
  return (
    <div className={MainWrapper}>
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
            <div className={Divider} />
            <img src={"/static/img/app-store.png"} className={AppStoreIcon} />
            <img
              src={"/static/img/google-store.png"}
              className={AppStoreIcon}
            />
          </div>
        </div>
      </div>
      <div className={ImageWrapper}>
        <img src={"/static/fs-logo.svg"} className={LogoImage} />
        <img src={"/static/img/fs-app.png"} className={MobileImage} />
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
bg-[#E5F0F7]
2xl:pl-[300px]
2xl:pr-[150px]

`;

const TextWrapper = `
border-[yellow]
w-[50%]
mt-[140px]
`;

const ImageWrapper = `
border-[yellow]
w-[50%]
mt-[120px]
flex
flex-col
justify-center
items-center
`;

const SubTitle = `
border-[red]
text-[25px]
text-[#0067B2]
font-[300]
leading-[109.4%]
mb-[14px]
`;

const Title = `
border-[red]
text-[30px]
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
max-w-[100%]
xl:max-w-[70%]
`;

const TextTitle = `
font-[600]
`;

const ButtonsWrapper = `
border-[red]
block
xl:flex
items-center
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
border-[red]
flex
items-center
mt-[20px]
xl:mt-[0px]
`;

const Divider = `
border-[1px]
border-[#0067B2]
h-[30px]
ml-[30px]
mr-[34px]
hidden
xl:block
`;

const AppStoreIcon = `
mr-[20px]
bg-black
flex
justify-center
items-center
py-2
px-3
rounded-[12px]
`;

const LogoImage = `
border-[red]
ml-[-10%]
`;

const MobileImage = `
border-[red]
ml-[-50%]
`;
