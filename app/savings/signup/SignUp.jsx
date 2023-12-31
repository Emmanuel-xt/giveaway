'use client'
import AccountInfo from "@app/app/components/AccountInfo";
import Confirmation from "@app/app/components/Confirmation";
import PersonalInfo from "@app/app/components/PersonalInfo";
import React, { useState } from "react";

const StepIndicator = ({ currentStep }) => {

  return (
    <div className="step-indicator flex w-full justify-between items-center mb-10">
    <div className={`flex items-center justify-center ${currentStep === 0 ? 'active' : ''} rounded-full text-[12px] p-2 w-5 h-5`}>1</div>
    <div className="w-full h-[2px] bg-slate-400"></div>
    <div className={`flex items-center justify-center bg-slate-900 ${currentStep === 1 ? 'active' : ''} rounded-full text-[12px] p-2 w-5 h-5`}>2</div>
    <div className="w-full h-[2px] bg-slate-400"></div>
    <div className={`flex items-center justify-center bg-slate-900 ${currentStep === 2 ? 'active' : ''} rounded-full text-[12px] p-2 w-5 h-5`}>3</div>
  </div>
  );
};

const AccountCreation = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 0));
  };


  return (
    <div className="flex flex-col justify-start items-start">
      <StepIndicator  currentStep={currentStep} />
      <div className="">
        {currentStep === 0 && <PersonalInfo onNext={nextStep} />}
        {currentStep === 1 && <AccountInfo onNext={nextStep} onPrev={prevStep} />}
        {currentStep === 2 && <Confirmation onPrev={prevStep} />}
      </div>
    </div>
  );
};

export default AccountCreation;
