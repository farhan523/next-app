import Image from "next/image";
import Logo from "../../static/allLogo/fleischer_logo.svg";

export default function ConfirmationModal(props) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 modal_bg">
        <div className="bg-white h-fit py-6 w-fit max-h-[98vh] overflow-y-auto rounded-lg relative">
          <h2 className="flex justify-center my-6">
            <Image src={Logo} alt="Logo" width={300} h={350} />
          </h2>
          <div className="flex flex-col py-3 px-5 items-center">
            <h2 className="text-sm text-center max-w-[400px]">{props.text}</h2>
            <h2 className="text-sm text-center text-brandBlue">
              {props.subHeading}
            </h2>
            <div className="w-full mt-[30px] flex justify-between">
              <button
                className={`py-[10px] bg-white text-brandBlue w-[48%] border-brandBlue border-[1px] rounded-xl`}
                onClick={props.onCancel}
              >
                Cancel
              </button>
              <button
                className={`py-[10px] bg-brandBlue text-white w-[48%] rounded-xl ${
                  props.loading && "disabled"
                }`}
                type="submit"
                disabled={props.loading}
                onClick={props.onConfirm}
              >
                {props.loading ? "Loading..." : "Yes"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
