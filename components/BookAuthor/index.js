import OrangeButton from "../NewMockupComponents/OrangeButton";

const Index = () => {
  return (
    // <div className="container mx-auto lg:px-32 py-24 px-4 lg:px-0">
    <div className="container mx-auto lg:px-32 py-24 px-4">
      <div className="flex flex-wrap">
        <div className="md:w-2/5 md:pr-20">
          <img
            src="/static/img/Morton.png"
            className="rounded-md"
            data-aos="fade-up"
          />
        </div>
        <div className="md:w-3/5 mt-8 md:mt-0">
          <h1
            className="text-3xl lg:text-6xl font-semibold text-brandBlue pb-10"
            data-aos="fade-down"
          >
            Building Your Mental Balance Sheet
          </h1>
          <p
            className="text-brandBlue text-sm leading-normal"
            data-aos="fade-down"
          >
            For a $20 or more donation to the <b>Fleischer Foundation</b> in
            support of the Fleischer Scholars Enrichment Program, you will
            receive a free copy of <b>“Building Your Mental Balance Sheet”.</b>{" "}
            Reading this book will put you on the road to improving your thought
            processes, building your own mental balance sheet, and may very well{" "}
            <b>CHANGE YOUR LIFE.</b>
          </p>
          <OrangeButton data-aos="fade-down" className="mt-12 w-fit" href="https://www.paypal.com/donate/?hosted_button_id=YFVRWFNPAWJ94"
            target="_blank" >
            DONATE HERE
            <i className="fa fa-arrow-right ml-2"></i>
          </OrangeButton>
        </div>
      </div>
    </div>
  );
};
export default Index;
