import TeacherGuideChapter1Sheet1Example1 from "./TeacherGuideChapter1Sheet1Example1";
import TeacherGuideChapter1Sheet1Example2 from "./TeacherGuideChapter1Sheet1Example2";
import TeacherGuideChapter1Sheet2Example1 from "./TeacherGuideChapter1Sheet2Example1";
import TeacherGuideChapter1Sheet2Example2 from "./TeacherGuideChapter1Sheet2Example2";
import TeacherGuideChapter1Sheet3Example1 from "./TeacherGuideChapter1Sheet3Example1";
import TeacherGuideChapter1Sheet3Example2 from "./TeacherGuideChapter1Sheet3Example2";
import TeacherGuideChapter3Sheet1 from "./TeacherGuideChapter3Sheet1";
import TeacherGuideChapter3Sheet2 from "./TeacherGuideChapter3Sheet2";
import TeacherGuideChapter3Sheet3 from "./TeacherGuideChapter3Sheet3";
import TeacherGuideChapter4Sheet1 from "./TeacherGuideChapter4Sheet1";
import TeacherGuideChapter4Sheet2Example1 from "./TeacherGuideChapter4Sheet2Example1";
import TeacherGuideChapter4Sheet2Example2 from "./TeacherGuideChapter4Sheet2Example2";
import TeacherGuideChapter5Sheet1 from "./TeacherGuideChapter5Sheet1";
import TeacherGuideChapter5Sheet2 from "./TeacherGuideChapter5Sheet2";
import TeacherGuideChapter5Sheet3 from "./TeacherGuideChapter5Sheet3";
import TeacherGuideChapter6Sheet1 from "./TeacherGuideChapter6Sheet1";
import TeacherGuideChapter6Sheet2 from "./TeacherGuideChapter6Sheet2";
import TeacherGuideChapter6Sheet3 from "./TeacherGuideChapter6Sheet3";
import TeacherGuideChapter7Sheet1 from './TeacherGuideChapter7Sheet1';
import TeacherGuideChapter7Sheet2 from './TeacherGuideChapter7Sheet2'

const InteractiveTeacherGuideComponents = ({
  lesson,
  chapter,
  handleSubmitForm,
  workBookAPI,
  onClickNextLesson,
  onClickPrevLesson,
  prevLesson,
  nextLesson,
  view,
}) => {
  if (lesson === 1.3)
    return (
      <TeacherGuideChapter1Sheet1Example1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 1.5)
    return (
      <TeacherGuideChapter1Sheet1Example2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        inWorkbook={true}
        view={view}
      />
    );
    if (lesson === 1.8)
    return (
      <TeacherGuideChapter1Sheet2Example1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 1.11)
    return (
      <TeacherGuideChapter1Sheet2Example2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 1.13)
    return (
      <TeacherGuideChapter1Sheet3Example1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 1.15)
    return (
      <TeacherGuideChapter1Sheet3Example2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 3.2)
    return (
      <TeacherGuideChapter3Sheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 3.4)
    return (
      <TeacherGuideChapter3Sheet2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 3.6)
    return (
      <TeacherGuideChapter3Sheet3
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 4.2)
    return (
      <TeacherGuideChapter4Sheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
    if (lesson === 4.4)
    return (
      <TeacherGuideChapter4Sheet2Example1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
      />
    );
  if (lesson === 4.6)
    return (
      <TeacherGuideChapter4Sheet2Example2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
  if (lesson === 5.2)
    return (
      <TeacherGuideChapter5Sheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
  if (lesson === 5.4)
    return (
      <TeacherGuideChapter5Sheet2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
  if (lesson === 5.6)
    return (
      <TeacherGuideChapter5Sheet3
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
  if (lesson === 6.2)
    return (
      <TeacherGuideChapter6Sheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
  if (lesson === 6.4)
    return (
      <TeacherGuideChapter6Sheet2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
    if (lesson === 6.6)
    return (
      <TeacherGuideChapter6Sheet3
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
    if (lesson === 7.2)
    return (
      <TeacherGuideChapter7Sheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );
    if (lesson === 7.4)
    return (
      <TeacherGuideChapter7Sheet2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
      />
    );

  return <p>Not Found</p>;
};

export default InteractiveTeacherGuideComponents;
