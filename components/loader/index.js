const Loader = ({ showLoading }) => {
  return (
    <div
      className={`bg-white flex items-center justify-center ${
        showLoading ? "min-h-[40vh]" : "min-h-screen"
      } `}
    >
      <img src="/static/img/website-loader.svg" />
    </div>
  );
};
export default Loader;
