const Inspiration = () => {
  return (
    <div className="w-[100%] relative flex flex-col min-h-[600px] items-center justify-center before:contents-[''] before:absolute before:blur-[80px] rounded-full  before:bg-brandOrangeLighten lg:before:right-[0] before:left-0 lg:before:left-auto  lg:before:bottom-[-30px] before:top-[-30px] lg:before:top-auto   before:w-[150px] before:min-h-[150px] before:z-[-1]">
      <div>
        <img
          src="/static/img/desktopLogo.svg"
          className="logo mb-[35px] min-h-[150px]  w-[70%] mx-auto lg:mx-0 lg:w-[100%] "
        />
      </div>

      <p className="text-brandBlue text-[25px] font-normal mb-[45px]" data-aos="fade-up">Presents:</p>
      <h2 className="text-3xl uppercase font-bold leading-[40px] w-[80%] lg:w-[41%] text-center text-brandBlue" data-aos="fade-up">
        ‘’A mind roadmap for success <br /> in{" "}
        <span className="text-brandOrange">business</span> and{" "}
        <span className="text-brandOrange">life</span>’’
      </h2>
    </div>
  );
};
export default Inspiration;
