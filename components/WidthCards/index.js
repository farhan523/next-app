const Index = () => {
  return (
    <div>
      <div className="py-12 lg:pt-24 px-4 lg:px-8  relative">
        <img
          data-aos="fade-up"
          src="/static/img/bookHorseLeft.png"
          className="absolute left-0 hidden xl:block "
          style={{ width: '200px', bottom: '10%', zIndex: -1 }}
        />
        <img
          data-aos="fade-up"
          src="/static/img/bookHorseRight.png"
          className="absolute right-0 hidden xl:block"
          style={{ width: '200px', top: '10%', zIndex: -1 }}
        />
        <div className=" container mx-auto flex flex-wrap justify-between items-center xl:px-32 mb-20">
          <div className="flex flex-wrap w-full items-start mb-20">
            <div className="md:w-1/4">
              <div
                className="successImage bg-center bg-cover bg-no-repeat rounded-full"
                style={{
                  height: '243px',
                  width: '234px',
                  backgroundImage: `url(${'/static/img/widthCard1.png'})`,
                }}
              />
            </div>
            <div className="md:pl-16 md:w-3/4">
              <h1 className="w-full text-brandBlue font-semibold text-5xl pb-6">
                Josh Elizetxe
              </h1>
              <p className="text-base text-brandLightBlue font-semibold">
                Former Fleischer Scholar and Fleischer Mentor
              </p>
              <p className="text-brandBlack text-sm pt-6">
                Josh is a successful serial entrepreneur and dedicated community leader.
                He is the founder of Foresold, a holding company focused on building high growth Internet brands. Each month over 10 million people interact online with brands owned and operated by Foresold. Josh was the Valedictorian of his class at Alhambra and graduated Summa cum Laude from Barrett Honors College and W.P. Carey School of Business at ASU at the age of 20. In addition to being involved in improving his community, he is a sought after company advisor and serves on the board of the Phoenix Coding Academy.

              </p>
            </div>
          </div>
          <div className="flex flex-wrap w-full items-start mb-20">
            <div className="md:w-1/4">
              <div
                className="successImage bg-center bg-cover bg-no-repeat rounded-full"
                style={{
                  height: '243px',
                  width: '234px',
                  backgroundImage: `url(${'/static/img/widthCardTwo.png'})`,
                }}
              />
            </div>
            <div className="md:pl-16 md:w-3/4">
              <h1 className="w-full text-brandBlue font-semibold text-5xl pb-6">
                Sebastian Navarro
              </h1>
              <p className="text-base text-brandLightBlue font-semibold">
                Former Fleischer Scholar and Fleischer Mentor
              </p>
              <p className="text-brandBlack text-sm pt-6">
                Sebastian Navarro graduated in May 2015 from the W. P. Carey School of Business with a B.S. in Supply Chain Management. During his time at ASU he served as both a business process intern as well as a global supply chain intern at Freeport-McMoRan Copper & Gold. Sebastian was also President of the Business School Council, a Success Team Leader, a Student Orientation Leader, McCord Scholar and Fleischer Scholars Mentor at ASU. He currently holds the position of Commodity Manager at American Airlines in Fort Worth, Texas. Sebastian is passionate about supply chain and would like to use his experiences to give back to communities around the world through humanitarian work in his chosen field.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap w-full items-start mb-20">
            <div className="md:w-1/4">
              <div
                className="successImage bg-center bg-cover bg-no-repeat rounded-full"
                style={{
                  height: '243px',
                  width: '234px',
                  backgroundImage: `url(${'/static/img/widthCardThree.png'})`,
                }}
              />
            </div>
            <div className="md:pl-16 md:w-3/4">
              <h1 className="w-full text-brandBlue font-semibold text-5xl pb-6">
                Ashley Cano
              </h1>
              <p className="text-base text-brandLightBlue font-semibold">
                Former Fleischer Scholar and Fleischer Mentor
              </p>
              <p className="text-brandBlack text-sm pt-6">
                Ashley Cano was a student at the W. P. Carey School of Business pursuing a B.S. in Accountancy. While at ASU, she achieved numerous accomplishments including becoming a member of the W. P. Carey Leaders Academy. Ashley was also a Devils’ Advocate, responsible for giving tours to prospective students and their families. She was a member of the National Honor Society and was a McCord Scholar for the 2015-2016 school year. Ashley was also selected to star in the video “Day in the Life of a W. P. Carey Student”. She graduated in May 2017.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
