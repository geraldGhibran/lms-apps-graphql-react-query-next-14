import React from 'react';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

type ChildrenProps = {
  children: React.ReactNode;
};

function layout({ children }: ChildrenProps) {
  return (
    <div>
      <DefaultLayout>{children}</DefaultLayout>
    </div>
  );
}

export default layout;
