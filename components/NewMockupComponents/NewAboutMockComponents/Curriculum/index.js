import CurriculumCard from "./CurriculumCard";

const cardData = [
  {
    title: {
      upperTitle: 'Learn the',
      spanItem: 'MIND ROADMAP',
      lowerTitle: 'for success'
    },
    img: "curriculumImage1.png",
  },
  {
    title: "Entrepreneurship team project",
    description: "– Develop a business model",
    img: "curriculumImage2.png",
  },
  {
    title: "Money Matters",
    description: "- Learn how to manage money",
    img: "curriculumImage3.png",
  },
  {
    title: "Earn college credit by taking one of the below",
    list: ["Math 101", "Communications 101", "Health 101"],
    img: "curriculumImage4.png",
  },
  {
    title: "Scholarship and financial aid workshop",
    description: "",
    img: "curriculumImage5.png",
  },
  {
    title: "Personal statement and essay workshop",
    description: "",
    img: "curriculumImage6.png",
  },
  {
    title: "Visit local successful businesses",
    description: "(either in person or virtually)",
    img: "curriculumImage7.png",
  },
  {
    title: "Resource fair",
    description: "",
    img: "curriculumImage8.png",
  },
  {
    title: "Faculty networking",
    description: "",
    img: "curriculumImage9.png",
  },
];

function Curriculum() {
  return (
    <div className="w-[80%] xl:px-[150px] mx-auto relative my-[100px] z-[-1] before:contents-[''] lg:before:block before:hidden before:absolute before:blur-[120px] rounded-full  before:bg-brandBlue before:right-[10px] before:top-[-120px] before:rounded-b-full before:rounded-l-full  before:w-[150px] before:min-h-[260px] before:z-[-1] after:contents-[''] after:absolute after:blur-[100px] after:rounded-t-full after:rounded-r-full   after:bg-brandOrangeLighten after:left-[0] after:bottom-[-120px] after:w-[120px] after:min-h-[120px] after:z-[-1]  ">
      <img
        src="/static/img/aboutHeroPatternImage.svg"
        className="absolute  2xl:right-[-150px]  xl:right-[-125px] md:right-[-100px] top-[-60px] w-[500px] hidden lg:block"
      />
      <div className="grid grid-cols-[78px_209px] items-center mb-[15px]">
        <h2 className="text-brandBlue text-[25px] font-[300]">OUR</h2>
        <div className="border-b-2 border-brandBlue w-[100%] mt-[10px] "></div>
      </div>
      <h1 className="text-[35px] font-[900] text-brandBlue mb-[50px] ">
        CURRICULUM
      </h1>
      <div className="grid lg:grid-cols-3 lg:grid-rows-3 justify-items-center  mx-auto ">
        {cardData.map(({ title, description, list, img }, index) => (
          <CurriculumCard
            key={index}
            img={img}
            index={index}
            title={title}
            description={description}
            list={list}
          />
        ))}
      </div>
    </div>
  );
}

export default Curriculum;
