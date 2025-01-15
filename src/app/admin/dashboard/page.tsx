'use client';
import DailyRevenue from 'components/admin/dashboard/DailyRevenue';
import MonthlyRevenue from 'components/admin/dashboard/MonthlyRevenue';
import WeeklyRevenue from 'components/admin/dashboard/WeeklyRevenue';
import Link from 'next/link';

const Dashboard = () => {
  return (
    <>
      <section className='flex gap-x-5'>
        <DailyRevenue />
         <WeeklyRevenue />
         <MonthlyRevenue />
      </section>

      <section className='mt-10'>
        <h1 className="text-2xl font-bold text-navy-700 dark:text-white">Recent Transactions</h1>
      </section>
      
      <section className='mt-10'>
        <h1 className="text-2xl font-bold text-navy-700 dark:text-white">Recent Users</h1>
      </section>
    </>
  );
};

export default Dashboard;
