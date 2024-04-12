import React, { useState } from 'react'
import Stepper from './stepper/Stepper';
import { StepperContext } from './context/StepperContext';
import StepperControl from './stepper/StepperControl';
import Account from './steps/Account';
import Details from './steps/Details';
import Final from './steps/Final';

const Order = ({CartItem}) => {
    const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);
  const steps = [
    "Shipping Address",
    "Order Confirmation",
    "Order Status"
  ];

  const displayStep = (step)=> {
    switch(step){
      case 1:
        return <Account />
      case 2:
        return <Details CartItem={CartItem}/> 
      case 3:
        return <Final CartItem={CartItem}/>

      default:

    }
  }
  
  const handleClick = (direction)=>{
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white ">
      {/* stepper */}
      <div className=' horizontal'>
      <Stepper
      steps = {steps}
      currentStep = {currentStep}
      />
      <div className='mt-10 p-10'>
        <StepperContext.Provider value={{
          userData, 
          setUserData,
          finalData,
          setFinalData

        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>
      {/* Navigation controls */}
      {currentStep !== steps.length &&
      <StepperControl
      handleClick={handleClick}
      currentStep={currentStep}
      steps={steps}
      />
    }
    </div>
  );
}

export default Order