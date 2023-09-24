/*---> Component <---*/
export const Donation = () => {
  return (
    <div className={MainWrapper}>
      <div className={ImageWrapper}>
        <img src={"/static/donation.svg"} className={Image} />
      </div>
      <div className={Title}>MAKE A DONATIION</div>
      <div className={Text}>
        Your donation makes a difference in the fight against cancer. Support
        the MMRF through our various donation options — and see if your employer
        will match your contribution.
      </div>
      <button className={Button}>Ways To Donate</button>
    </div>
  )
}

/*---> Styles <---*/
const MainWrapper = `
border-[red]
flex
flex-col
justify-center
items-center
py-[80px]
md:py-[144px]

`

const Title = `
border-[red]
text-[25px]
sm:text-[35px]
text-[#126CAB]
font-[900]
lg:leading-[110px]
mb-[42px]
text-center
w-[90%]
sm:w-[80%]
`

const Text = `
border-[red]
text-[15px]
text-[#002E4E]
font-[300]
leading-[23px]
text-center
mb-[42px]
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
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
w-[201px]
h-[42px]
`

const ImageWrapper = `
border-[red]
w-[100%]
lg:w-[600px]
mb-[20px]
lg:mb-[-70px]
flex
justify-center
lg:block
`

const Image = `
border-[red]

`
