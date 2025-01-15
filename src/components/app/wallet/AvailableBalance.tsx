import Card from "components/card";



export default function Balance() {
    const balance = 0

    return (
        <>
         <Card extra="border border-gray-200 dark:border-navy-600">
         <div className="w-full md:w-1/2 p-6">
              <div className="h-full">
                <p className="text-sm text-[#1B254B] dark:text-white">
                  Available Balance
                </p>
                <h4 className="mb-5 text-xl lg:text-3xl font-bold text-navy-700 dark:text-white">
                ₦{balance}
                </h4>
              </div>
            </div>
         </Card>
        </>
    )
}