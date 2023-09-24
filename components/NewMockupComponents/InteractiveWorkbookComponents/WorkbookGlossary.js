import NextPrevLesson from "../Dashboard/ProgramsContent/NextPrevLesson";
import { WorkbookGlossaryData } from "./data";

const WorkbookGlossary = ({
  handleSubmit,
  onClickPrevLesson,
  onClickNextLesson,
  prevLesson,
  nextLesson,
  workItem,
}) => {
  return (
    <>
      <NextPrevLesson
        onClickNextLesson={() => {
          onClickNextLesson();
        }}
        onClickPrevLesson={onClickPrevLesson}
        prevLesson={prevLesson}
        nextLesson={nextLesson}
        saveAndContinue={false}
        workItem={workItem}
      />
      <table className="w-full border-2 rounded-sm border-black mt-12">
        <thead className="w-full border-2 border-black h-10 rounded-xl">
          <tr className="w-full text-left">
            <th className="w-[30%] border-r-2 pl-4 border-black">Term</th>
            <th className="w-[70%] pl-4">Definition</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {WorkbookGlossaryData.map((item, index) => {
            return (
              <>
                <tr className="h-12 border-y-2 border-black">
                  <td className="col-span-2 font-bold pl-4">{item.name}</td>
                </tr>
                {item.data.map((data, index) => {
                  return (
                    <tr className="h-10">
                      <td className="w-[30%] px-4 border-r-2 border-black">
                        {data.term}
                      </td>
                      <td className="w-[70%] px-4">{data.definition}</td>
                    </tr>
                  );
                })}
              </>
            );
          })}
          {/* <tr className="h-12 border-b-2 border-black">
            <td className="col-span-2 font-bold pl-4">A</td>
          </tr> */}
          {/* <tr className="h-10">
            <td className="w-[30%] px-4 border-r-2 border-black">
              accounts payable
            </td>
            <td className="w-[70%] px-4">
              money that a company owes creditors but has not yet paid
            </td>
          </tr>
          <tr className="h-10">
            <td className="w-[30%] px-4 border-r-2 border-black">
              accounts receivable
            </td>
            <td className="w-[70%] px-4">
              money owed to a company by its debtors
            </td>
          </tr>
          <tr className="h-10">
            <td className="w-[30%] px-4 border-r-2 border-black">accrue</td>
            <td className="w-[70%] px-4">accumulate</td>
          </tr>
          <tr className="h-10">
            <td className="w-[30%] px-4 border-r-2 border-black">accrue</td>
            <td className="w-[70%] px-4">accumulate</td>
          </tr>
          <tr className="h-10">
            <td className="w-[30%] px-4 border-r-2 border-black">accrue</td>
            <td className="w-[70%] px-4">accumulate</td>
          </tr> */}
        </tbody>
      </table>
    </>
  );
};

export default WorkbookGlossary;
