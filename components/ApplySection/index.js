import { useQuery } from "@apollo/client";
import { useState } from "react";
import UniversityCards from "../UniverstiyCards";
import { SessionsListQuery } from "../../graphql/queries/sessions/queries";
import get from "lodash/get"
const Index = ({UniversityList}) => {
  const [showMore, setShowMore] = useState(false);
  const { data } = useQuery(SessionsListQuery);
  const list = data?.sessions?.data ?? [];

  return (
    <>
      <div id="applySection"></div>
      <div className="py-20">
        <div className="container mx-auto flex justify-between flex-wrap px-4 lg:px-32">
          <div className="w-full mt-8 lg:mt-0" data-aos="fade-down">
            <p className="text-brandBlue text-base">UNIVERSITIES</p>
            <h1 className="text-brandBlue text-5xl font-semibold mt-4">
              Apply Now
            </h1>
            <div className="mt-[40px] relative">
              <div
                className="sm:grid sm:grid-cols-2 sm:gap-5 lg:grid lg:grid-cols-1"
                style={{
                  height: !showMore ? "600px" : "auto",
                  overflow: "hidden",
                }}
              >
                {list.map((itemData, index) => {
                  var image = get(
                    itemData,
                    "attributes.university.data.attributes.logo.data.attributes.url",
                    null
                  );
                  if (image) {
                    image = `${image}`.replace("//uploads", '/uploads/')
                  }
                  return (
                    <div className="mb-10" key={index}>
                      <UniversityCards
                        logo={image}
                        prevSessions={itemData.attributes.previous_session_date}
                        upcommingSessions={itemData.attributes.upcoming_date}
                        applicationDeadLine={itemData.attributes.deadline_date}
                        link={itemData.attributes.apply_now_link}
                      ></UniversityCards>
                    </div>
                  );
                })}
              </div>
              {showMore === false && (
                <>
                  <div className="blur-div absolute w-full h-20 bg-white bottom-[40px] blur-[40px]"></div>
                  <div
                    className="flex justify-center gap-3 items-center cursor-pointer"
                    onClick={() => {
                      setShowMore(true);
                    }}
                  >
                    <h1 className="text-brandBlue font-semibold">View All</h1>
                    <img src="/static/img/arrow-down.svg" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;   