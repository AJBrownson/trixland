import Balance from 'components/admin/wallet/AvailableBalance';
import DepositMethodOptions from 'components/admin/wallet/DepositOptions';
import Instructions from 'components/admin/wallet/Instructions';
import TransactionHistory from 'components/admin/wallet/TransactionHistory';

export default function Wallet() {
  return (
    <>
      <div className="mt-5 grid grid-cols-1 grid-rows-4 gap-4 lg:grid-cols-2 lg:grid-rows-2">
        <Balance />
        <DepositMethodOptions />
        <TransactionHistory />
        <Instructions />
      </div>
    </>
  );
}
