// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex space-x-8">
        {/* New Invoice */}
        <a href="/new-invoice" className="flex flex-col items-center">
          <div className="w-16 h-16 bg-green-300 flex items-center justify-center rounded-full">
            {/* Invoice Icon with plus sign */}
            <span>+</span>
          </div>
          <span className="mt-2">New Invoice</span>
        </a>
        {/* New Ingress */}
        <a href="/new-ingress" className="flex flex-col items-center">
          <div className="w-16 h-16 bg-blue-300 flex items-center justify-center rounded-full">
            {/* Ingress Icon placeholder */}
            <span>In</span>
          </div>
          <span className="mt-2">New Ingress</span>
        </a>
        {/* Clients List */}
        <a href="/clients" className="flex flex-col items-center">
          <div className="w-16 h-16 bg-yellow-300 flex items-center justify-center rounded-full">
            {/* Clients Icon placeholder */}
            <span>CL</span>
          </div>
          <span className="mt-2">Clients List</span>
        </a>
        {/* Monthly Balance */}
        <a href="/balance" className="flex flex-col items-center">
          <div className="w-16 h-16 bg-red-300 flex items-center justify-center rounded-full">
            {/* Balance Icon placeholder */}
            <span>$</span>
          </div>
          <span className="mt-2">Monthly Balance</span>
        </a>
      </div>
    </div>
  );
}
