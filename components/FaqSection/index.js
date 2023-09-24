import Link from "next/link"
const Index = () => {
  return (
    <div className="bg-themeGray w-full py-32">
      <div className="container mx-auto px-32">
        <p
          className="text-center text-brandBlue text-xl md:text-2xl"
          data-aos="fade-up"
        >
          EXPLORE THESE OPTIONS
        </p>
        <h1
          className="text-center text-brandBlue text-3xl md:text-5xl	font-semibold pt-6"
          data-aos="fade-up"
        >
          Have Questions?
        </h1>

        <div
          className="mx-auto pt-28 flex justify-between md:flex-row flex-col "
          data-aos="fade-up"
        >
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 bg-brandBlue rounded-full flex items-center justify-center">
              <img src="/static/img/questionSearch.svg" className="w-12 h-12" />
            </div>
            <p className="cursor-pointer text-center text-brandBlue  pt-4 md:pt-8 text-xl border-b border-transparent hover:border-brandOrange hover:text-brandOrange">
              LEARN MORE
            </p>
          </div>
          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 bg-brandBlue rounded-full flex items-center justify-center">
              <img src="/static/img/janImage.svg" className="w-12 h-12" />

            </div>
            <Link href="/upcoming-sessions">
              <a>
                <p className="cursor-pointer text-center text-brandBlue pt-4 md:pt-8 text-xl border-b border-transparent hover:border-brandOrange hover:text-brandOrange">
                  UPCOMING SESSIONS
            </p>
              </a>
            </Link>
          </div>

          <div className="flex flex-col items-center mb-8 md:mb-0">
            <div className="w-24 h-24 bg-brandBlue rounded-full flex items-center justify-center">
              <img src="/static/img/envelop.svg" className="w-12 h-12" />
            </div>
            <Link href="/contact">
              <a>
                <p className="cursor-pointer text-center text-brandBlue pt-4 md:pt-8 text-xl border-b border-transparent hover:border-brandOrange hover:text-brandOrange">
                  CONTACT US
            </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
