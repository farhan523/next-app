import Link from "next/link"

/*---> Component <---*/
export const DesktopFooter = () => {
  return (
    <div className={MainWrapper}>
      <div className={FirstLineWrapper}>
        <img src={"/static/fs-logo.svg"} />
        <div className={ContactUs}>CONTACT US</div>
      </div>
      <div className={FirstLineLinksWrapper}>
        <Link href={"#"}>
          <div className={FirstLineLink}>UPCOMING SESSIONS</div>
        </Link>
        <Link href={"#"}>
          <div className={FirstLineLink}>RESOURCES</div>
        </Link>
        <Link href={"#"}>
          <div className={FirstLineLink}>SUCCESS STORIES</div>
        </Link>
        <Link href={"#"}>
          <div className={FirstLineLink}>THE BOOK</div>
        </Link>
      </div>
      <div className={SecondLineWrapper}>
        <div className={SocialIconsWrapper}>
          <Link href={"#"}>
            <img src={"/static/twitter-icon.svg"} className={TwitterIcon} />
          </Link>
          <Link href={"#"}>
            <img src={"/static/facebook-icon.svg"} className={FacebookIcon} />
          </Link>
        </div>
        <div className={Address}>
          W.P. Carey School of Business
          <br /> 300 E. Lemon St.
          <br /> Tempe, AZ 85287
        </div>
      </div>
      <div className={ThirdLineWrapper}>
        <div className={ThirdLineLinksWrapper}>
          <Link href={"#"}>
            <div className={TermsLink}>Terms of Service</div>
          </Link>
          <Link href={"#"}>
            <div className={PrivacyLink}>Privacy Policy</div>
          </Link>
        </div>
        <div className={Copyright}>
          © 2022 FLEISCHER FOUNDATION. ALL RIGHTS RESERVED
        </div>
        <Link href={"#"}>
          <div className={SolveOnline}>
            BY SOLVEONLINE FOR BUSINESS [INNOVATION]
          </div>
        </Link>
      </div>
    </div>
  )
}

/*---> Styles <---*/
const MainWrapper = `
border 
border-[#E5F0F7]
bg-[#E5F0F7]
hidden
lg:block
`

const FirstLineWrapper = `
border-[yellow]
mt-[45px]
flex
justify-between
items-center
pr-[130px]
pl-[50px]
xl:pr-[150px]
xl:pl-[50px]
`

const ContactUs = `
border-[yellow]
text-[12px]
text-[#0067B3]
font-[400]
`

const FirstLineLinksWrapper = `
hidden
lg:flex
items-center
justify-center
mt-[-33px]
`

const FirstLineLink = `
border-[yellow]
text-[12px]
text-[#0067B3]
font-[400]
lg:ml-[40px]
cursor-pointer

`

const SecondLineWrapper = `
border-[yellow]
flex
justify-between
items-center
mt-[30px]
pr-[17px]
pl-[50px]
xl:pr-[37px]
xl:pl-[50px]

`

const SocialIconsWrapper = `
border-[red]
flex
`

const TwitterIcon = `
border-[red]
mr-[32px]
cursor-pointer
`

const FacebookIcon = `
border-[red]
cursor-pointer
`

const Address = `
border-[red]
text-[13px]
text-[#0067B2]
font-[600]
`

const ThirdLineWrapper = `
border-t-[1px]
border-[#0067B2]
mt-[45px]
flex
justify-between
items-center
pt-[20px]
pb-[40px]
pr-[20px]
pl-[50px]
xl:pr-[40px]
xl:pl-[50px]
`

const Copyright = `
border-[red]
text-[11px]
text-[#0067B2]
font-[700]
ml-[50px]
`

const SolveOnline = `
border-[red]
text-[11px]
text-[#0067b240]
font-[700]
cursor-pointer

`

const ThirdLineLinksWrapper = `
border-[red]
flex
items-center
`

const TermsLink = `
border-[red]
text-[11px]
text-[#0067B2]
font-[300]
mr-[42px]
cursor-pointer

`

const PrivacyLink = `
border-[red]
text-[11px]
text-[#0067B2]
font-[300]
cursor-pointer

`
