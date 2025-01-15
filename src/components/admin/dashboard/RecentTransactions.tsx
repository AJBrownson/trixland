import Link from 'next/link';


export default function RecentTransactions() {
  return (
    <>
      <div className="mt-16">
        <h1 className="text-xl font-semibold">Recent Transactions</h1>
        <p className='text-base mt-6 mb-3'>You haven't placed any order yet!</p>
        <Link href="#" className="text-base font-bold text-brand-500">
          Explore Products
        </Link>
      </div>
    </>
  );
}
