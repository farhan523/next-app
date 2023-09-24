/*---> Component <---*/
export const DesktopAnnouncement = () => {
  return (
    <>
      <div className={MainWrapper}>
        APPLY NOW! The Fleischer Scholars Program is pleased to announce
        upcoming sessions. Apply before the deadline!
      </div>
      <div className={ReadUpdateWrapper}>
        <p className={Text}>Read Update</p>
        <img src={"/static/right-arrow.svg"} className={ArrowIcon} />
      </div>
    </>
  );
};

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
hidden
lg:block
`;

const ReadUpdateWrapper = `
border-[blue]
pr-[20px]
mt-[-42.5px]
cursor-pointer
hidden
xl:flex
justify-end
items-center

`;

const Text = `
text-[15px]
text-[white]
font-[700]
leading-[37px]
mr-[10px]
`;

const ArrowIcon = `
`;
