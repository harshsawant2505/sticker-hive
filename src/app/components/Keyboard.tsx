import React from 'react';

const Keyboard = ({Row1}:any) => {
  const keysRow1 = [{src:"src",key:'Q'}, {src:"src",key:'W'}, {src:"src",key:'E'}, {src:"src",key:'R'}, {src:"src",key:'T'}, {src:"src",key:'Y'}, {src:"src",key:'U'}, {src:"src",key:'I'}, {src:"src",key:'O'}, {src:"src",key:'P'}];
  const keysRow2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const keysRow3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];


  return (
    <div className="flex flex-col items-center w-fit rounded-lg border-[4px] justify-center p-4 space-y-2">
    <div className="flex space-x-2">
      {keysRow1.map((key:any,index:any) => (
        <div
          key={index}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
        >
          {key.key}
        </div>
      ))}
    </div>
    <div className="flex space-x-2">
      {keysRow2.map(key => (
        <div
          key={key}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
        >
          {key}
        </div>
      ))}
    </div>
    <div className="flex space-x-2">
      {keysRow3.map(key => (
        <div
          key={key}
          className="w-10 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
        >
          {key}
        </div>
      ))}
    </div>
    <div className="flex space-x-2">
      <div
        className="w-40 h-10 flex items-center justify-center bg-gray-200 text-gray-800 font-bold rounded shadow-md"
      >
        Space
      </div>
    </div>
  </div>
  );
};

export default Keyboard;
