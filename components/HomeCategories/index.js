import Link from "next/link";
const Index = () => {
  return (
    <div className="container mx-auto py-36 px-4  md:px-20 xl:px-32">
      <div className="flex flex-col-reverse lg:flex-row  justify-between">
        <div className=" lg:w-1/2 w-full mb-12 lg:mb-0">
          <p className="text-brandBlue text-xl pt-5" data-aos="fade-down">
            I AM A{" "}
            <span className="font-bold text-3xl lg:text-4xl	">STUDENT</span>
          </p>
          <p
            className="text-brandBlack text-base	pt-8 leading-normal"
            data-aos="fade-down"
          >
            Do you have a passion and desire to follow your dreams? Would you
            like the unique opportunity of experiencing college life,
            entrepreneurship and learning more about business? This ‘no cost’
            program is being held virtually and is designed to provide you with
            many developmental opportunities as well as prepare you for the
            college admission process.You will learn the aspects and importance
            of developing a roadmap for your success in life and in business.
          </p>
          <Link href="/program-information/students">
            <a>
              <button
                className="orangeButton mt-8 text-base	focus:outline-none"
                data-aos="fade-down"
              >
                LEARN MORE
              </button>
            </a>
          </Link>
        </div>
        <div
          className="w-full md:w-2/5 rounded-xl bg-center bg-no-repeat mobilebackgrounds"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${"/static/img/IAMstudent.png"})`,
          }}
        >
          {/* <img src="/static/img/IAMstudent.png" className="mb-4 lg:mb-0" /> */}
        </div>
      </div>
      <img src="/static/img/pipeLeftRight.png" className="lg:block hidden" />
      <div className="flex flex-col lg:flex-row  justify-between">
        <div
          className="w-full md:w-2/5 rounded-xl bg-center bg-no-repeat mobilebackgrounds"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${"/static/img/parent.png"})`,
          }}
        >
          {/* <img src="/static/img/parent.png" className="mb-4 lg:mb-0" /> */}
        </div>
        <div className="lg:w-1/2 w-full mb-12 lg:mb-0">
          <p className="text-brandBlue text-xl pt-5" data-aos="fade-down">
            I AM A{" "}
            <span className="font-bold text-3xl lg:text-4xl	">PARENT</span>
          </p>
          <p
            className="text-brandBlack text-base	pt-8 leading-normal"
            data-aos="fade-down"
          >
            The Fleischer Scholars Program helps qualified, economically
            disadvantaged students develop their full potential by bringing them
            into the mainstream through education. With this program we are able
            to provide a path of learning for youths who otherwise may lack the
            necessary resources and support needed to succeed yet they are eager
            to fulfill their dreams. Students enrolled will benefit from a
            multitude of available resources. They will learn the necessary
            skills for success in college and beyond as they participate in this
            ‘no cost’ virtual summer program. You can help them start
            their journey on the road to success!
          </p>
          <Link href="/program-information/parents">
            <a>
              <button
                className="orangeButton mt-8 text-base	focus:outline-none"
                data-aos="fade-down"
              >
                LEARN MORE
              </button>
            </a>
          </Link>
        </div>
      </div>
      <img src="/static/img/pipeRightLeft.png" className="lg:block hidden" />
      <div className="flex flex-col-reverse lg:flex-row  justify-between">
        <div className="lg:w-1/2 w-full">
          <p className="text-brandBlue text-xl pt-5" data-aos="fade-down">
            I AM A{" "}
            <span className="font-bold text-3xl lg:text-4xl">UNIVERSITY</span>
          </p>
          <p
            className="text-brandBlack text-base	pt-8 leading-normal"
            data-aos="fade-down"
          >
            Fleischer Scholars is honored to partner with universities like
            yours with a unique life-changing program giving opportunities to
            economically disadvantaged, underserved, yet ambitious,
            high-achieving high school students. If given the opportunity, the
            resources, the necessary training and skills from this program they
            can discover the journey to a life of success and fulfillment.
            Otherwise, they may not even think of going to college because of
            the financial position they are in. Yet your university can help
            make their dreams come true!
          </p>
          <Link href="/program-information/university">
            <a>
              <button
                className="orangeButton mt-8 text-base	focus:outline-none"
                data-aos="fade-down"
              >
                LEARN MORE
              </button>
            </a>
          </Link>
        </div>
        <div
          className="w-full md:w-2/5 rounded-xl bg-center bg-no-repeat bg-cover mobilebackgrounds mb-4 lg:mb-0"
          data-aos="fade-up"
          style={{
            backgroundImage: `url(${"/static/img/university.png"})`,
          }}
        >
          {/* <img src="/static/img/university.png" className="mb-4 lg:mb-0" /> */}
        </div>
      </div>
    </div>
  );
};
export default Index;
