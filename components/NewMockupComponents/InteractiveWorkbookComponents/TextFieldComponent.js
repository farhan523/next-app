import { Alert } from "@material-ui/lab";
import React, { useState } from "react";

const TextFieldComponent = ({
  interactiveItem,
  onChangeInteractiveComponent,
  inputValues,
  error,
}) => {
  // const [inputValue, setInputValue] = useState({});
  // const onChangeInteractiveComponent = ({target}) => {
  //    const {name, value} = target;
  //   //  setInputValue(prevState => {
  //   //   return {
  //   //     ...prevState,
  //   //     [name]: value
  //   //   }
  //   // })
  //   setInputValue({
  //     ...inputValue,
  //     [name] : value
  //   })
  // }

  let valueFields = {};
  if (inputValues && inputValues[interactiveItem?.key]) {
    valueFields.value = inputValues[interactiveItem?.key];
  }

  return (
    <div className="block text-left w-full mt-10 mb-3">
      <label>
        {interactiveItem?.labelText1 && (
          <p className={pStyles}>
            {interactiveItem?.id}) {interactiveItem?.labelText1}
          </p>
        )}

        {interactiveItem?.labelText2 && (
          <p className={pStyles}>{interactiveItem?.labelText2}</p>
        )}
      </label>
      {interactiveItem?.fields ? (
        Array.from(Array(interactiveItem?.fields), (e, i) => {

          let nestedValueFields = {};
          if (
            interactiveItem?.fields &&
            inputValues &&
            inputValues[interactiveItem?.fieldsLabels[i].key]
          ) {
            nestedValueFields.value =
              inputValues[interactiveItem?.fieldsLabels[i].key];
          }
          return (
            <>
              <label>
                <p className="text-gray-700">
                  {/* {interactiveItem?.id} ){" "} */}
                  {interactiveItem?.fieldsLabels[i].value}
                </p>
              </label>
              <textarea
                id={interactiveItem?.fieldsLabels[i].key}
                name={interactiveItem?.fieldsLabels[i].key}
                onChange={onChangeInteractiveComponent}
                {...nestedValueFields}
                className="form-textarea mt-2 mb-2 block w-full bg-[#F9FDFF] border-[#A7C4D7]"
                rows={interactiveItem?.fieldsLabels[i].rows}
                style={{ resize: "none", overflowY: "scroll" }}
                placeholder="Enter your answer"
                required={true}
              ></textarea>
              {error && <p className="text-red-700">Fill out this field</p>}
            </>
          );
        })
      ) : (
        <textarea
          // className="form-textarea mt-1 block w-full bg-[#F9FDFF] border-[#A7C4D7]"
          className={textAreaStyles}
          id={interactiveItem?.key}
          name={interactiveItem?.key}
          onChange={onChangeInteractiveComponent}
          // value={chapter1Report.hasOwnProperty(interactiveItem?.key) ? chapter1Report[interactiveItem?.key] : inputValues[interactiveItem?.key ]}
          {...valueFields}
          rows="5"
          style={{ resize: "none", overflowY: "scroll" }}
          placeholder="Enter your answer"
          required={true}
        ></textarea>
      )}
      {error && (
        <Alert severity="error" className="mt-3">
          Please fill this field
        </Alert>
      )}
    </div>
  );
};

export default TextFieldComponent;

const textAreaStyles = `
 text-[12px] text-brandBlue  placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] focus:border-brandBlue border-[#A7C4D7] mb-5  focus:border-b-[2px] focus:bg-inputFocus form-textarea mt-1 block w-full bg-[#F9FDFF] border-[#A7C4D7]`;
const pStyles = `text-[13px] font-light leading-4`;
