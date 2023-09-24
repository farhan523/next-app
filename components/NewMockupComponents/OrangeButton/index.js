function OrangeButton({ children, as = "a", ...props }) {
  const { IconRight, IconLeft, ...rest } = props;

  const attrs = {
    ...rest,
    className: `transition text-[15px] h-[45px] text-white cursor-pointer  flex justify-center items-center bg-gradient hover:bg-gradient-darken ${
      props.className ?? ""
    }`,
  };

  const content = (
    <>
      {IconLeft && (
        <img
          src={IconLeft}
          className={`${attrs.iconClassName} w-[8px] mr-[15px]`}
        />
      )}
      {children}
      {IconRight && (
        <img
          src={IconRight}
          className={`${attrs.iconClassName} w-[8px] ml-[15px]`}
        />
      )}
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
    <a {...attrs} className={`${attrs.className} py-2 px-8 rounded-3xl`}>
      {content}
    </a>
  );
}

export default OrangeButton;
