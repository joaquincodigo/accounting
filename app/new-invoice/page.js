"use client";

import { useState } from "react";

export default function NewInvoice() {
  const [invoiceId] = useState(() => Date.now());
  const [items, setItems] = useState([
    { id: 1, name: "", price: "", quantity: "" },
  ]);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-xl font-bold mb-4">New Invoice</h1>
      <form className="space-y-4">
        {/* Invoice ID & Date */}
        <div className="flex justify-between">
          <span>
            ID:{" "}
            <input
              type="text"
              value={invoiceId}
              readOnly
              className="bg-gray-200 p-1"
            />
          </span>
          <span>Date: {new Date().toLocaleDateString()}</span>
        </div>
        {/* Client Section */}
        <div className="flex items-center space-x-2">
          <label className="whitespace-nowrap">Client:</label>
          <input
            type="text"
            placeholder="Select or type client name"
            className="border p-2 flex-1"
          />
          <button type="button" className="text-blue-500">
            New Client
          </button>
        </div>
        {/* Invoice Table */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Products</h2>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-1">Product Name</th>
                <th className="border p-1">Price</th>
                <th className="border p-1">Quantity</th>
                <th className="border p-1">Subtotal</th>
                <th className="border p-1">Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td className="border p-1">
                    <input type="text" className="w-full" placeholder="Name" />
                  </td>
                  <td className="border p-1">
                    <input
                      type="number"
                      className="w-full"
                      placeholder="Price"
                    />
                  </td>
                  <td className="border p-1">
                    <input type="number" className="w-full" placeholder="Qty" />
                  </td>
                  <td className="border p-1 text-center">--</td>
                  <td className="border p-1 text-center">
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => {
                        if (item.id !== 1) {
                          removeItem(item.id);
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Invoice Total */}
        <div className="flex justify-between items-center">
          <span>Total:</span>
          <span className="font-bold">$0.00</span>
        </div>
        <button type="submit" className="px-4 py-2 bg-green-500 text-white">
          Save Invoice
        </button>
      </form>
    </div>
  );
}
