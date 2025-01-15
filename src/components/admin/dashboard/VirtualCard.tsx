import Card from 'components/card';

export default function VirtualCard() {
  const balance = '0';
  const accnum = '--- ---';
  return (
    <>
      <Card extra="border border-gray-200 dark:border-navy-600">
        <div className="flex w-full flex-col md:flex-row">
          <div className="w-full p-6 md:w-1/2">
            <div className="h-full">
              {/* First section content */}
              <p className="text-sm text-[#1B254B] dark:text-white">
                Available Balance
              </p>
              <h4 className="mb-5 text-xl font-bold text-navy-700 dark:text-white lg:text-3xl">
                ₦{balance}
              </h4>
              <button className="rounded-lg bg-brand-500 px-5 py-3 text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
                Fund Wallet
              </button>
            </div>
          </div>

          {/* Divider line - only shows on md+ screens */}
          <div className="hidden w-px bg-gray-200 dark:bg-navy-600 md:block"></div>

          <div className="w-full p-6 md:w-1/2">
            <div className="h-full">
              {/* Second section content */}
              <p className="mb-4 text-sm text-[#1B254B] dark:text-white">
                Your Virtual Account Number
              </p>
              <span>
                <p className="mb-2 text-xs text-[#1B254B] dark:text-white">
                  Account Number
                </p>
                <p className="text-xs text-[#1B254B] dark:text-white">
                  {accnum}
                </p>
              </span>

              <span>
                <p className="mb-2 mt-3 text-xs text-[#1B254B] dark:text-white">
                  Bank Number
                </p>
                <p className="text-xs text-[#1B254B] dark:text-white">
                  {accnum}
                </p>
                <p className="mt-5 text-xs text-brand-500 dark:text-white">
                  The bank account belongs to only you and payment made to it
                  funds your wallet immediately
                </p>
              </span>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
