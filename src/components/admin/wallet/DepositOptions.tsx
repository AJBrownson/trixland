import Image from 'next/image'
import Card from 'components/card';
import { RxCaretRight } from 'react-icons/rx';
import CreditCards from '../../../../public/svg/Credit Cards.svg'

export default function DepositMethodOptions() {
  return (
    <>
      <Card extra="border border-gray-200 dark:border-navy-600">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Deposit Method Options
          </h1>
          <div className="my-4 h-px bg-gray-200 dark:bg-navy-500" />

          <div className="flex items-center space-x-5">
          <Image src={CreditCards} alt="Credit Card" width={40} height={40} className="dark:invert" />
          <div>
            <span className="text-[10px] font-medium text-green-500">
              RECOMMENDED - FASTEST
            </span>
            <div className="group flex cursor-pointer items-center justify-between">
              <p className="text-base text-gray-900 transition-colors group-hover:text-brand-500 dark:text-gray-400">
                Fund wallet with Tsara
              </p>
              <RxCaretRight className="text-gray-400 transition-colors group-hover:text-brand-500" />
            </div>
            </div>
          </div>

          <div className="my-4 h-px bg-gray-200 dark:bg-navy-500" />

          <div className="flex items-center space-x-5">
          <Image src={CreditCards} alt="Credit Card" width={40} height={40} className="dark:invert" />
          <div>
            <span className="text-[10px] font-medium text-red-500">
              NOT AVAILABLE
            </span>
            <div className="group flex cursor-pointer items-center justify-between">
              <p className="text-base text-gray-900 transition-colors group-hover:text-brand-500 dark:text-gray-400">
                Fund wallet with Etegram
              </p>
              <RxCaretRight className="text-gray-400 transition-colors group-hover:text-brand-500" />
            </div>
          </div>
          </div>
        </div>
      </Card>
    </>
  );
}
