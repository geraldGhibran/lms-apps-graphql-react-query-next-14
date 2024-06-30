'use client';
import useSideBanner from '@/app/hooks/useSideBanner';
import Image from 'next/image';
import React from 'react';

function SideBanners() {
  const { sideBannerList } = useSideBanner();
  return (
    <div>
      {sideBannerList?.sideBanners?.map((item, index) => (
        <div key={index}>
          <Image
            src={item.banner.url}
            onClick={() => window.open(item?.url)}
            className="rounded-xl cursor-pointer"
            alt="banner"
            width={400}
            height={100}
            priority
          />
        </div>
      ))}
    </div>
  );
}

export default SideBanners;
