import React from 'react';
import DashboardPage from './_component/DasboardPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard - My Academy',
  description: 'This is Dashboard - My Academy'
};

function Dashboard() {
  return <DashboardPage />;
}

export default Dashboard;
