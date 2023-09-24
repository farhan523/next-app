import Link from "next/link";

/*---> Component <---*/
export const DesktopNavbar = () => {
  return (
    <div className={MainWrapper}>
      <div className={FirstNavbarWrapper}>
        <div className={LeftSection}>BY FLEISCHER SCHOLARS FOUNDATION</div>
        <div className={RightSection}>
          INFO FOR <img src={"/static/arrow-down.svg"} className={ArrowIcon} />
        </div>
      </div>
      <div className={FirstNavbarLinksWrapper}>
        <Link href={"#"}>
          <div className={FirstNavbarLink}>University Partners</div>
        </Link>
        <Link href={"#"}>
          <div className={FirstNavbarLink} href={"#"}>
            My Fleischer Scholars
          </div>
        </Link>
        <Link href={"#"}>
          <div className={FirstNavbarLink} href={"#"}>
            Resources
          </div>
        </Link>
        <Link href={"#"}>
          <div className={FirstNavbarLink} href={"#"}>
            Contact Us
          </div>
        </Link>
      </div>
      <div className={LogoSectionWrapper}>
        <img src={"/static/img/logo.png"} className={Logo} />
      </div>
      <div className={SecondNavbarWrapper}>
        <div className={Divider}></div>
        <div className={SecondNavbarLinksWrapper}>
          <Link href={"#"}>
            <div className={SecondNavbarLink}>HOME</div>
          </Link>
          <Link href={"#"}>
            <div className={SecondNavbarLink}>ABOUT FLEISCHER SCHOLARS</div>
          </Link>
          <Link href={"#"}>
            <div className={SecondNavbarLink}>UPCOMING SESSIONS</div>
          </Link>
          <Link href={"#"}>
            <div className={SecondNavbarLink}>RESOURCES</div>
          </Link>
          <Link href={"#"}>
            <div className={SecondNavbarLink}>APPLY NOW</div>
          </Link>
        </div>
        <div className={Divider}></div>
      </div>
    </div>
  );
};

/*---> Styles <---*/
const MainWrapper = `
border-[red]
mb-[25px]
`;

const FirstNavbarWrapper = `
h-[50px]
bg-[#0067b21a]
py-[15px]
hidden
lg:flex
items-center
justify-between
`;

const LeftSection = `
border-r-[1px]
border-r-[#0067B2]
h-[23px]
pl-[50px]
pr-[30px]
py-[5px]
flex
items-center
text-[11px]
text-[#00477B]
font-[500]
leading-[21px]
`;

const RightSection = `
w-[200px]
h-[50px]
bg-[#0067B2]
text-[14px]
text-[white]
font-[800]
leading-[21px]
flex
items-center
justify-center
cursor-pointer
`;

const ArrowIcon = `
ml-[15px]
`;

const FirstNavbarLinksWrapper = `
hidden
lg:flex
items-center
justify-center
lg:ml-[40px]
cursor-pointer
`;

const FirstNavbarLink = `
mr-[20px]
xl:mr-[50px]
text-[11px]
text-[#00477B]
font-[400]
leading-[21px]
mt-[-50px]
`;

const LogoSectionWrapper = `
h-[140px]
hidden
lg:flex
items-center
justify-center
`;

const Logo = `
w-[240px]
`;

const SecondNavbarWrapper = `
hidden
lg:flex
items-center
justify-center
h-[20px]
`;

const SecondNavbarLinksWrapper = `
w-[80%]
xl:w-[74%]
flex
items-center
justify-around
`;

const SecondNavbarLink = `
text-[13px]
xl:text-[15px]
text-[#126CAB]
font-[600]
leading-[22px]
hover:text-[#ee6e5dd1]
cursor-pointer
`;

const Divider = `
w-[10%]
xl:w-[13%]
h-[7px]
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
`;
