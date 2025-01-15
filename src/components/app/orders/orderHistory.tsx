import Link from 'next/link';

export default function OrderHistory() {
  return (
    <>
    <div className='flex flex-col min-h-screen items-center'>
      <h1 className="text-base font-semibold mb-2">No Orders Yet.</h1>
      <p className="text-sm">
        You haven't bought any product yet.{' '}
        <Link
          href="/admin/products"
          className="text-base font-bold text-brand-500"
        >
          Explore Products
        </Link>
      </p>
      </div>
    </>
  );
}
