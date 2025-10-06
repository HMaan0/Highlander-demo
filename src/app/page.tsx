import { rawData } from "./data";

export default function Home() {
  const data = Array.from(
    new Map(rawData.map((item) => [item.name, item])).values()
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        Customer Data Table
      </h1>

      <div className="overflow-x-auto shadow-md rounded-lg border border-gray-200 bg-white">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-gray-100 text-gray-900 uppercase text-xs font-semibold">
            <tr>
              <th className="p-3">Select</th>
              <th className="p-3">Customer Number</th>
              <th className="p-3">Name</th>
              <th className="p-3">Phone Number</th>
              <th className="p-3">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <input type="checkbox" className="accent-blue-600" />
                </td>
                <td className="p-3">{item.number}</td>
                <td className="p-3">{item.name}</td>

                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
