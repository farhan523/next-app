import Link from "next/link"

/*---> Component <---*/
export const MobileFooter = () => {
  return (
    <div className={MainWrapper}>
      <div className={LogoSocialWrapper}>
        <img src={"/static/fs-logo.svg"} />
        <div className={SocialIconsWrapper}>
          <Link href={"#"}>
            <img src={"/static/twitter-icon.svg"} className={TwitterIcon} />
          </Link>
          <Link href={"#"}>
            <img src={"/static/facebook-icon.svg"} className={FacebookIcon} />
          </Link>
        </div>
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
      <div className={AddressWrapper}>
        <div className={ContactUs}>CONTACT US</div>
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
border-[red]
bg-[#E5F0F7]
block
lg:hidden
flex
flex-col
items-center
`

const LogoSocialWrapper = `
border-[yellow]
flex
flex-col
items-center
mt-[30px]
`

const SocialIconsWrapper = `
border-[red]
flex
justify-center
items-center
mt-[24px]
`

const TwitterIcon = `
border-[red]
mr-[16px]
cursor-pointer
`

const FacebookIcon = `
border-[red]
cursor-pointer
`

const FirstLineLinksWrapper = `
border-[red]
flex
flex-col
items-center
mt-[51px]
`

const FirstLineLink = `
border-[yellow]
text-[12px]
text-[#0067B3]
font-[400]
cursor-pointer
mb-[11px]
`

const AddressWrapper = `
border-[yellow]
text-center
mt-[40px]
`

const ContactUs = `
border-[yellow]
text-[12px]
text-[#0067B3]
font-[400]
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
mt-[20px]
flex
flex-col
items-center
w-[100%]
`

const ThirdLineLinksWrapper = `
border-[red]
flex
flex-col
items-center
mt-[20px]
`

const TermsLink = `
border-[red]
text-[11px]
text-[#0067B2]
font-[300]
cursor-pointer
mb-[10px]
`

const PrivacyLink = `
border-[red]
text-[11px]
text-[#0067B2]
font-[300]
cursor-pointer

`

const Copyright = `
border-[red]
text-[11px]
text-[#0067B2]
font-[700]
mt-[20px]
`

const SolveOnline = `
border-[red]
text-[11px]
text-[#0067b240]
font-[700]
cursor-pointer
mt-[10px]
mb-[17px]
`
