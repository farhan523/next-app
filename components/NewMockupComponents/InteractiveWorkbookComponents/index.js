import WorkbookChapter1 from "./WorkbookChapter1";
import WorkbookChapter2 from "./WorkbookChapter2";
import WorkbookChapter3 from "./WorkbookChapter3";
import WorkbookChapter4 from "./WorkbookChapter4";
import WorkbookChapter5 from "./WorkbookChapter5";
import WorkbookChapter6 from "./WorkbookChapter6";
import WorkbookChapter7 from "./WorkbookChapter7";
import WorkbookChapter8 from "./WorkbookChapter8";
import WorkbookChapter9 from "./WorkbookChapter9";
import WorkbookChapter10 from "./WorkbookChapter10";
import WorkbookChapter11 from "./WorkbookChapter11";
import WorkbookGlossary from "./WorkbookGlossary";
import WorkbookGlossaryBibliography from "./WorkbookGlossaryBibliography";
import WorkbookAppendixAWorksheet from "./WorkbookAppendixAWorksheet";
import WorkbookAppendixBWorksheet1 from "./WorkbookAppendixBWorksheet1";
import WorkbookAppendixBWorksheet2 from "./WorkbookAppendixBWorksheet2";
import WorkbookAppendixBWorksheet3 from "./WorkbookAppendixBWorksheet3";

const InteractiveWorkbookComponents = ({
  lesson,
  chapter,
  handleSubmitForm,
  workBookAPI,
  onClickNextLesson,
  onClickPrevLesson,
  prevLesson,
  nextLesson,
  view,
  workItem,
}) => {
  if (lesson === 1.1 || chapter === 1)
    return (
      <WorkbookChapter1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 2.4 || chapter === 2)
    return (
      <WorkbookChapter2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        inWorkbook={true}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 3.8 || chapter === 3)
    return (
      <WorkbookChapter3
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 4.5 || chapter === 4)
    return (
      <WorkbookChapter4
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 5.5 || chapter === 5)
    return (
      <WorkbookChapter5
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 6.9 || chapter === 6)
    return (
      <WorkbookChapter6
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 7.6 || chapter === 7)
    return (
      <WorkbookChapter7
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 8.2 || chapter === 8)
    return (
      <WorkbookChapter8
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 9.7 || chapter === 9)
    return (
      <WorkbookChapter9
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 10.8 || chapter === 10)
    return (
      <WorkbookChapter10
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 11.4 || chapter === 11)
    return (
      <WorkbookChapter11
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        view={view}
        workItem={workItem}
      />
    );
  if (lesson === 12.1)
    return (
      <WorkbookAppendixAWorksheet
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );
  if (lesson === 13.5)
    return (
      <WorkbookAppendixBWorksheet1
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );
  if (lesson === 13.6)
    return (
      <WorkbookAppendixBWorksheet2
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );
  if (lesson === 13.7)
    return (
      <WorkbookAppendixBWorksheet3
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );
  if (lesson === 14.1)
    return (
      <WorkbookGlossary
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );
  if (lesson === 14.2)
    return (
      <WorkbookGlossaryBibliography
        handleSubmitForm={handleSubmitForm}
        workBookAPI={workBookAPI}
        onClickNextLesson={onClickNextLesson}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        workItem={workItem}
      />
    );

  return <p>Not Found</p>;
};

export default InteractiveWorkbookComponents;
