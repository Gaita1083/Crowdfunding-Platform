import React from 'react';

const Countbox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
     <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-[#1c1c24] rounded-t-[10px] w-full text-center truncate">{value}</h4>
     <p className="bg-[#28282e] text-[#808191] font-epilogue font-normal text-[16px] py-2 px-3 w-full rounded-b-[10px] text-center">{title}</p>
    </div>
  )
}

export default Countbox