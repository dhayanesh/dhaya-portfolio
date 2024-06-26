import React from 'react';
import '../../app/globals.css';


const ActionButtons = () => {
  const url = 'https://drive.google.com/file/d/1co5D82MwzOjWudEX4rEkYvb_fJW-aK-1/view?usp=drive_link';
  const pdfDownloadUrl = '/Dhaya_Resume.pdf';

  return (
    <div  id="resume" className="relative flex flex-col items-center justify-center">

      <div className="z-10 text-center">
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-5">
          Resume
        </h1>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', margin: '90px'}}>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="button-85" role="button" disabled>View</button>
          </a>
          <a href={pdfDownloadUrl} download>
            <button className="button-85" role="button" disabled>Download</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
