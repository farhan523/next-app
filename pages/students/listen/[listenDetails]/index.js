import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import IndividualAudioBookContent from "../../../../components/NewMockupComponents/Dashboard/AudioBookContent";
import IndividualAudioBook from "../../../../components/NewMockupComponents/Dashboard/AudioBookContent/IndividualAudioBook";
import Sidebar from "../../../../components/NewMockupComponents/Dashboard/Sidebar";
import UserNavBar from "../../../../components/NewMockupComponents/Dashboard/UserNavBar";
import TopNavigation from "../../../../components/NewMockupComponents/TopNavigation";
import { fetchAPI } from "../../../../lib/api";
import { getCurrentUser } from "../../../../store/user.reducer";

const ListenDetails = ({ id, chapterAudioData }) => {
  const userInfo = useSelector(getCurrentUser);
  const [playing, setPlaying] = useState(false);
  const [allAudioData, setAllAudioData] = useState(
    chapterAudioData && chapterAudioData.data
  );
  const [currentID, setCurrentID] = useState(Number(id));

  useEffect(() => {
    fetchAPI(`/audio-books?populate=*`)
      .then((data) => {
        setAllAudioData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function getChapterData(chapterNumber) {
    const filteredData = allAudioData.filter(
      (item) => item.attributes.chapter == chapterNumber
    );

    const chapterDataArray = [...filteredData];

    return chapterDataArray;
  }

  const chapterData = getChapterData(id);

  // const chapter2Data = getChapterData(2);

  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation />
      </div>
      <div className="lg:mb-[65px]"></div>
      <div>
        <UserNavBar />
      </div>

      <div className="lg:flex">
        <Sidebar role={userInfo && userInfo?.accessLevel} />

        <IndividualAudioBook
          playing={playing}
          setPlaying={setPlaying}
          chapterData={chapterData}
          allAudioData={allAudioData}
          id={id}
          currentID={currentID}
          setCurrentID={setCurrentID}
        />
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const chapterAudioData = await fetchAPI("/audio-books", {
      sort: ["audioNumber:asc"],
      populate: "*",
    });

    const { listenDetails } = context.query;

    return {
      props: {
        chapterAudioData,
        id: listenDetails ?? null,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);

    return {
      props: {
        chapterAudioData: null,
        id: null,
      },
    };
  }
}

export default ListenDetails;
