'use client';
import VirtualCard from 'components/admin/dashboard/VirtualCard';
import AvailableProducts from 'components/admin/dashboard/AvailableProducts';
import BuyFollowers from 'components/admin/dashboard/BuyFollowers';
import RecentTransactions from 'components/admin/dashboard/RecentTransactions';
import Link from 'next/link';

const Dashboard = () => {
  const username = 'User';
  return (
    <>
      {/* Greeting section */}
      <section className="mt-5">
        <span>
          <VirtualCard />

          {/* Available products */}
          <div>
            <div className="mt-16 flex flex-col justify-between">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Available Products</h1>
                <Link
                  href="/admin/products"
                  className="text-base font-bold text-brand-500"
                >
                  See All
                </Link>
              </div>
              <AvailableProducts />
            </div>
          </div>

          {/* Buy followers */}
          <div>
            <div className="mt-16 flex flex-col justify-between">
              <div className="flex justify-between">
                <h1 className="text-xl font-semibold">Buy Followers</h1>
                <Link
                  href="/admin/buy-followers"
                  className="text-base font-bold text-brand-500"
                >
                  See All
                </Link>
              </div>
              <BuyFollowers />
            </div>
          </div>
        </span>
        <span>
          <RecentTransactions />
        </span>
      </section>
    </>
  );
};

export default Dashboard;
