import Card from 'components/card';
import Link from 'next/link';

export default function TransactionHistory() {
  return (
    <>
      <Card extra="border border-gray-200 dark:border-navy-600">
        <div className="p-6">
          <div className="flex justify-between">
            <h1>Recent Activities</h1>
            <Link href="#" className="text-base font-bold text-brand-500">
              See All
            </Link>
          </div>

          <div className="mt-5 flex flex-col items-center text-center">
            <h1 className="mb-2 text-base font-semibold">
              No Transactions Yet
            </h1>
            <p className="text-sm">
              When you fund your wallet, the transaction details will be
              displayed here.
            </p>
          </div>
        </div>
      </Card>
    </>
  );
}
