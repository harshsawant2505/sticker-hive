import React from 'react';
import ImageComponent from './ImageDownloader';
import { url } from 'inspector';

const Keyboard = ({row1,row2,row3}:any) => {
  const keysRow1 = [ 'Q' ,  'W' ,  'E' ,  'R' ,  'T', 'Y' , 'U' , 'I' , 'O' , 'P' ];
  const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];


  return (
    <div className="flex flex-col items-center h-fit overflow-x-hidden rounded-lg justify-center  gap-y-2 ">
    <div className="flex space-x-2">
      {row1&&row1.map((key:any,index:any) => (
        <div
          key={index}
          className="min-w-[10mm] object-contain  min-h-[10mm] max-w-[10mm] max-h-[10mm]  border-black border flex items-center justify-center  text-gray-800 font-bold rounded "
        >
        <img src={key} className='w-full h-full rounded' alt=""  />
        </div>
      ))}
    </div>
    <div className="flex space-x-1 z-0">
      {row2&&row2.map((key:any,index:any) => (
        <div
          key={index}
          className="min-w-[10mm] min-h-[10mm] object-contain max-w-[10mm] max-h-[10mm] flex items-center justify-center  text-gray-800 font-bold rounded border border-black"
        >
       <img src={key} className='w-full h-full rounded z-0' alt="" />
        </div>
      ))}
    </div>
    <div className="flex space-x-1">
      {row3&&row3.map((key:any,index:any) => (
        <div
          key={index}
          className="min-w-[10mm] min-h-[10mm] object-contain max-w-[10mm] max-h-[10mm] flex items-center justify-center  text-gray-800 font-bold rounded border border-black"
        >
          <img src={key} alt="" className='w-full h-full rounded' />
        </div>
      ))}
    </div>
    <div className=" space-x-1 hidden">
      <div
        className="min-w-48 min-h-[10mm] flex items-center justify-center  text-gray-800 font-bold rounded border border-black"
      >
        Space
      </div>
    </div>
  </div>
  );
};

export default Keyboard;
