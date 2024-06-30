import Image from 'next/image';
import React from 'react';

function WelcomeBanner() {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5 dark:border-strokedark dark:bg-boxdark">
      <Image
        src="/welcome-logo.svg"
        alt="welcome"
        height={0}
        width={0}
        style={{ width: '150px', height: 'auto' }}
      />
      <div>
        <h2 className="font-bold text[27-px] ">
          Welcome to <span className="text-bold">MyAcademy</span>
        </h2>
        <h2 className="text-gray-500">Explore Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  );
}

export default WelcomeBanner;
