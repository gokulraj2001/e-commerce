import { useContext } from 'react';
import { StepperContext } from '../context/StepperContext';;

export default function Account() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col ">
      <div className='w-full mx-2 flex-1'>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Name
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData["name"] || ""}
            name="name"
            placeholder='Name'
            type='text'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Mobile No
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData["mobileNo"] || ""}
            name="mobileNo"
            placeholder='Mobile No'
            type='tel'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Address
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData["address"] || ""}
            name="address"
            placeholder='Address'
            type='text'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Pincode
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <input
            onChange={handleChange}
            value={userData["pincode"] || ""}
            name="pincode"
            placeholder='Pincode'
            type='text'
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          />
        </div>
      </div>

      <div className='w-full mx-2 flex-1'>
        <div className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Type of Address
        </div>
        <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
          <select
            onChange={handleChange}
            value={userData["addressType"] || ""}
            name="addressType"
            className='p-1 px-2 appearance-none outline-none w-full text-gray-800'
          >
            <option hidden>Select Address Type</option>
            <option value="home">Home</option>
            <option value="work">Work</option>
          </select>
        </div>
      </div>
    </div>
  );
};

