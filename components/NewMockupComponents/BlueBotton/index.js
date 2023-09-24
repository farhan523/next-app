const BlueButton = ({ children, as = "a", ...props }) => {
  const { IconRight, IconLeft, ...rest } = props;

  const attrs = {
    ...rest,
    className: `transition text-[15px] h-[45px] text-white cursor-pointer  flex justify-center items-center bg-brandBlue ${
      props.className ?? ""
    }`,
  };

  const content = (
    <>
      {IconLeft && <img src={IconLeft} className="w-[23px] mr-[15px]" />}
      {children}
      {IconRight && <img src={IconRight} className="w-[23px] ml-[15px]" />}
    </>
  );

  if (as === "button") {
    return (
      <button {...attrs} className={`${attrs.className} py-2 px-8 rounded-lg`}>
        {content}
      </button>
    );
  }

  return (
    <a {...attrs} className={`${attrs.className} py-2 px-8 rounded-xl`}>
      {content}
    </a>
  );
};

export default BlueButton;
