import moment from "moment";

const UniversityCards = ({
  prevSessions,
  upcommingSessions,
  applicationDeadLine,
  link,
  logo = "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20WIDTH%20HEIGHT'%3E%3C/svg%3E",
}) => {

  const checkDateValidity = (date) => {
    const daysDifference = moment().diff(date, 'days');
    if (daysDifference > 0){
      return false
    } else {
      return true
    }
  }

  return (
    <div className="grid 2xl:grid-cols-[300px_700px_230px] xl:grid-cols-[230px_540px_210px] lg:grid-cols-[178px_420px_109px] grid-rows-[150px_130px_180px] lg:grid-rows-none gap-10 lg:gap-0 lg:w-full items-center p-5 bg-sky-100 rounded-lg ">
      <div className="w-full flex 2xl:gap-10 gap-5">
        <img
          src={logo}
          className="lg:w-[80%] h-[100px] w-full object-contain"
        />
        <div className="border-r-2 border-brandBlue h-[80px] hidden lg:block"></div>
      </div>
      <div className="grid lg:grid-cols-3 gap-7 lg:justify-self-center relative">
        <div>
          <div className="flex gap-2 mb-2">
            <img src="/static/img/clock-remove.svg" />
            <h2 className="text-slate-400 2xl:text-base lg:text-sm">
              Previous Sessions
            </h2>
          </div>
          <p className="text-slate-700 2xl:text-sm text-xs text-[13px]">
            <s>{moment(prevSessions).format("MMMM DD YYYY")}</s>
          </p>
        </div>
        <div>
          <div className="flex gap-2 mb-2 w-full">
            <img src="/static/img/clock-check.svg" />
            <h2 className="text-brandBlue 2xl:text-base lg:text-sm text-[13px] ">
              Upcoming Sessions
            </h2>
          </div>
          {
            checkDateValidity(moment(upcommingSessions).format("MMMM DD YYYY")) ? 

              <p className="text-slate-500 2xl:text-sm text-xs">
                {moment(upcommingSessions).format("MMMM DD YYYY")}
              </p>
              :
              <p className="text-slate-700 2xl:text-sm text-xs text-[13px]">
                <s>{moment(upcommingSessions).format("MMMM DD YYYY")}</s>
              </p>
          }
          
        </div>
        <div className="">
          <div className="flex gap-2 mb-2">
            <img src="/static/img/calendar-check.svg" />
            <h2 className="text-brandOrange 2xl:text-base lg:text-sm text-[13px] ">
              Application Deadline
            </h2>
          </div>
          {
            checkDateValidity(moment(applicationDeadLine).format("MMMM DD YYYY")) ?

              <p className="text-slate-500 2xl:text-sm text-xs">
                {moment(applicationDeadLine).format("MMMM DD YYYY")}
              </p>
              :
              <p className="text-slate-700 2xl:text-sm text-xs text-[13px]">
                <s>{moment(applicationDeadLine).format("MMMM DD YYYY")}</s>
              </p>
          }
        </div>
      </div>
      <div className="justify-self-end border-t-2 border-brandBlue lg:border-none  w-full flex justify-end pt-5 lg:pt-0">
        {
          checkDateValidity(moment(applicationDeadLine).format("MMMM DD YYYY")) ?
            <a
              className="bg-brandBlue cursor-pointer text-white text-center font-semibold p-3 lg:max-w-[150px] w-full rounded-xl"
              href={link}
              target="_blank"
            >
              Apply Now
            </a>
            :
            <p
              className="bg-zinc-400 text-white text-center font-semibold p-3 lg:max-w-[150px] w-full rounded-xl"
            >
              Apply Now
            </p>
        }
        
      </div>
    </div>
  );
};

export default UniversityCards;
