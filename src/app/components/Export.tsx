'use client'

// components/ExportPdf.tsx
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Keyboard from './Keyboard';




const Export = ({row1,row2,row3,loaded,transparency}:any) => {
  const divRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
    if (loaded) {
        console.log("loaded i am in")
        handleExport();
        
       
   
    }
    console.log("loaded i am in")

 }, [row1, row2, row3])
 
  

   const handleExport = async () => {
    if (divRef.current) {
        const canvas = await html2canvas(divRef.current,{scale:4});
        const imgData = canvas.toDataURL('image/png');
  
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        console.log(imgWidth, imgHeight);
  
        // Calculate the aspect ratio
        const aspectRatio = imgWidth / imgHeight;

        console.log(aspectRatio)
  
        // Define PDF dimensions
        const pdfWidth = 210; // A4 width in mm
        const pdfHeight = pdfWidth / aspectRatio;
  
        // Create a new jsPDF instance
        const pdf = new jsPDF({
          orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
          unit: 'mm',
          format: [pdfWidth, pdfHeight],
        });
  
        // Add the image to the PDF
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('keyboard-design.pdf');
      }


      
      
  };

 
  

  return (
    <div className=' top-0   overflow-x-hidden z-10 '>
      <div ref={divRef} className=" border absolute  border-black w-[210mm]  h-[297mm] flex justify-center items-center  ">
        <Keyboard row1={row1} row2={row2} row3={row3} transparency = {transparency} />
      </div>
      <button onClick={handleExport} className='px-2 py-1 absolute bg-black text-white'>Export as PDF</button>
    </div>
  );
};

export default Export

