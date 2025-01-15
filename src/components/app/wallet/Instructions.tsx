import Card from 'components/card';

export default function Instructions() {
  return (
    <>
      <Card extra="border border-gray-200 dark:border-navy-600">
        <div className="p-6">
          <h1 className="text-base">Instructions</h1>
          <p className="mt-6 text-base">
            Note: Funding Wallet will require you to make online payments using
            your preferred method such as transfer, ATM, USSD, etc.
          </p>
          <p className="mt-5 text-base">
            Important Notice: Pay exactly the amount you are required to pay. Do
            not pay less or higher than the displayed amount to avoid
            transaction errors.
          </p>
        </div>
      </Card>
    </>
  );
}
