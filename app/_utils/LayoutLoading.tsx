'use client';
import React, { useEffect, useState } from 'react';
import Loader from '@/components/common/Loader';
import { useLmsStore } from '@/stores/lms-store';
import { useShallow } from 'zustand/react/shallow';
import { Toaster } from 'sonner';
import useCheckUserMembership from '../hooks/useCheckUserMembership';

export default function LayoutLoading({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(true);

  const { setIsMember, isMember } = useLmsStore(
    useShallow((state) => ({
      setIsMember: state.setIsMember,
      isMember: state.isMember
    }))
  );

  const { data } = useCheckUserMembership();

  if (data?.membeships?.length > 0) {
    setIsMember(true);
  } else {
    setIsMember(false);
  }

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <Toaster />

      {loading ? <Loader /> : children}
    </div>
  );
}
