/*---> Component <---*/
export const NewsLetter = () => {
  return (
    <div className={MainWrapper}>
      <div className={Title}>
        Get the latest <span className={"font-[700]"}>Fleischer Scholars</span>{" "}
        news <br />
        and updates
      </div>
      <div className={Text}>
        Knowledge is power. Sign up today and we’ll help you stay informed.
      </div>
      <button className={Button}>Sign Up</button>
    </div>
  )
}

/*---> Styles <---*/
const MainWrapper = `
border-[red]
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
flex
flex-col
justify-center
items-center
py-[80px]
md:py-[121px]
`

const Title = `
border-[red]
text-[25px]
sm:text-[35px]
text-[white]
font-[400]
lg:leading-[56px]
mb-[45px]
text-center
w-[90%]
sm:w-[80%]
`

const Text = `
border-[red]
text-[15px]
text-[white]
font-[300]
leading-[23px]
text-center
mb-[55px]
w-[90%]
sm:w-[80%]
`

const Button = `
border-[red]
text-[16px]
text-[white]
font-[600]
leading-[26px]
rounded-[25px]
bg-[#0067B2]
w-[201px]
h-[42px]
`
