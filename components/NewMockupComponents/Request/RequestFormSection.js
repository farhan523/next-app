import { useSelector } from "react-redux";
import RequestInformationForm from "./RequestInformationForm";
import { getNafFormSubmitted } from "../../../store/nafForm.reducer";

const RequestFormSection = () => {
  const isNafFormSubmitted = useSelector(getNafFormSubmitted);

  return (
    <>
      {!isNafFormSubmitted && (
        <div className="lg:px-24 py-12 lg:py-20 lg:h-fit min-h-[660px] h-auto hero-mockup-new bg-sky-100">
          <div className="w-[100%] h-[100%] flex lg:content-center lg:items-center flex-col items-center lg:flex-row justify-center gap-10 mb-[50px] p-5 lg:p-12">
            <div className="w-[100%] lg:w-[60%] p-6 lg:p-14 bg-white border border-gray rounded-md">
              <RequestInformationForm />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestFormSection;
