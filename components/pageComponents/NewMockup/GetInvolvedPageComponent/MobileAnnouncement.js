/*---> Component <---*/
export const MobileAnnouncement = () => {
  return (
    <div className={MainWrapper}>
      APPLY NOW! The Fleischer Scholars Program is pleased to announce...
    </div>
  )
}

/*---> Styles <---*/
const MainWrapper = `
bg-gradient-to-r from-[#FF6454] to-[#FFA67B]
text-[16px]
text-[white]
font-[700]
leading-[25px]
text-center
px-[30px]
py-[10px]
lg:hidden
`
