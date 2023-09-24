const LogoSection = () => {
  return (
    <div className="grid min-h-[365px] items-center overflow-x-hidden justify-center relative">
      <div className="absolute top-[-20px] right-[-50px] bg-brandOrangeLighten blur-[90px] rounded-full w-[15%] min-h-[50%] z-[-1]"></div>
      <img
        src="/static/img/desktopLogo.svg"
        className="min-h-[81px] w-[279px]"
      />
    </div>
  );
};

export default LogoSection;
