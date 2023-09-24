
/*---> Component <---*/
export const MobileNavbar = () => {
  return (
    <div className={MainWrapper}>
      <img src={"/static/img/logo.png"} className={Logo} />
      <img src={"/static/img/iconBurger.svg"} className={MenuIcon} />
    </div>
  )
}

/*---> Styles <---*/
const MainWrapper = `
px-[20px] 
py-[25px] 
flex 
justify-between 
items-center 
lg:hidden
`

const Logo = `
w-[240px]
`

const MenuIcon = `
cursor-pointer
`
