import { Alert } from "@material-ui/lab";
import React, { useState } from "react";

const RadioInputComponent = ({
  interactiveItem,
  onChangeInteractiveComponent,
  inputValues,
  error,
}) => {
  return (
    <div>
      <p className="text-sm text-gray-500">
        {/* 1. These are delivered via SMS to your mobile phone. */}
        {interactiveItem?.id} ) {interactiveItem?.labelText1}
      </p>
      {interactiveItem?.radioOptions?.map((radioOption) => {
        return (
          <div className="flex items-center mb-1">
            <input
              id={interactiveItem?.key}
              name={interactiveItem?.key}
              value={radioOption}
              checked={inputValues && inputValues[interactiveItem?.key] && inputValues[interactiveItem?.key] === radioOption}
              // checked={interactiveItem?.key === radioOption
              onChange={onChangeInteractiveComponent}
              type="radio"
              className="w-[12px] h-[12px] border-[#0067B2] focus:ring-0 focus:ring-[#0067B2]"
            />
            <label
              htmlFor="push-everything"
              className="ml-3 block font-normal text-[13px] text-[#121212]"
            >
              {radioOption}
            </label>
          </div>
        );
      })}
      {error && (
        <Alert severity="error" className="mt-3">
          Please fill this field
        </Alert>
      )}
    </div>
  );
};

export default RadioInputComponent;
