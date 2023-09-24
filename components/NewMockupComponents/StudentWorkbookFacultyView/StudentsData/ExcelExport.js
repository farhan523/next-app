import { CSVLink } from "react-csv";

let headers = [
  { label: 'Student Name', key: 'studentName' },
  { label: 'Status', key: 'status' },
  { label: 'Start Date', key: 'startDate' },
  { label: 'Chapters Completed', key: 'chaptersCompleted'},
  { label: 'Progress', key: 'progress'},
  { label: 'Chapter No:', key: 'chapterNo'},
  { label: 'Question No:', key: 'questionNo'},
  { label: 'Question Text', key: "questionText"},
  { label: 'Student Response', key: 'studentResponse'}
];

let data = [
  {studentName: "Ishtiaq", status: "In Progress", startDate: "09/05/2023", chaptersCompleted: "2/11", progress: "18%", chapterNo:1, questionNo:1, questionText: "What's you Name ? ", studentResponse: "My name is Ishtiaq Bhatti. I love watching Sports. " },
  {chapterNo:1, questionNo:2, questionText: "List Three Hobbies ?", studentResponse: "Watching Sports" },
  {studentResponse: "Travelling"},
  {studentResponse: "Solving Complex Problems"}

];


const ExcelExport = ({exportableData}) => {
  if(exportableData) {
    return (
      <CSVLink data={exportableData} headers={headers} className="py-[10px] bg-brandBlue text-white px-10 rounded-xl w-fit uppercase">
        Export Data
      </CSVLink>
        )
  }

  return <p>Data still loading...</p>

}

export default ExcelExport;

