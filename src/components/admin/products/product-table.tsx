

export default function ProductTable() {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-300 dark:border-navy-600">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Image</th>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Name</th>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Description</th>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Price</th>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Quantity</th>
                        <th className="border border-gray-200 dark:border-navy-600 px-4 py-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Data rows will be dynamically populated here */}
                </tbody>
            </table>
        </div>
    );
}
