'use client';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';

function WelcomeBannerDashboard() {
  const { user } = useUser();
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5 dark:border-strokedark dark:bg-boxdark">
      <Image
        src="/undraw_welcome_re_h3d9.svg"
        loading="eager"
        alt="welcome"
        height={0}
        width={0}
        style={{ width: '100px', height: 'auto' }}
        priority
      />

      <div>
        <h2 className="font-bold text[27-px]">
          Welcome Back, <span className="text-bold uppercase">{user?.firstName}</span>
        </h2>
        <h2 className="text-gray-500">Explore Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDashboard;
