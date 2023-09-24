import React from "react";

const TextField2Component = ({interactiveItem, onChangeInteractiveComponent, inputValues}) => {
  let valueFields = {};
  if (inputValues && inputValues[interactiveItem?.key]) {
    valueFields.value = inputValues[interactiveItem?.key];
  }
      return (
        <textarea
          className="text-[12px] text-brandBlue placeholder:text-[#A7C4D7] focus:placeholder:text-[#121212] w-[380px] bg-[#F9FDFF] mb-4 border-[#A7C4D7] rounded-[7px]"
          rows="2"
          style={{ resize: "none", overflowY: "scroll" }}
          placeholder="Enter text here"
          id={interactiveItem.key}
          name={interactiveItem.key}
          {...valueFields}
          onChange={onChangeInteractiveComponent}
          required
        ></textarea>
      );
      }

export default TextField2Component;
