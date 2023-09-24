import { useMemo, useState } from "react";
import FaqItem from "./FaqItem";

const Faq = ({ data }) => {
  const [openedKey, setOpenedKey] = useState(null);

  const content = useMemo(() => {
    const isStudent = data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == "I_AM_A_STUDENT";
    });
    const isParent = data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == "I_AM_A_PARENT";
    });
    const isUniversity = data?.contents?.data?.find((item) => {
      return item.attributes.lookup.data.attributes.name == "I_AM_A_UNIVERSITY";
    });
    return [isStudent, isParent, isUniversity];
  }, [data]);

  return (
    <>
      {content.map((i, index) => {
        return (
          <FaqItem
            onRequestOpen={() => setOpenedKey(index)}
            onRequestHide={() => setOpenedKey(null)}
            isOpened={index === openedKey}
            isLastItem={index === content.length - 1}
            data={i}
          />
        );
      })}
    </>
  );
};
export default Faq;
