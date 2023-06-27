import { Modal } from "components/Modal";
import React, { useState } from "react";

export const SizeChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-400 text-sm hover:text-red-500 hover:underline"
      >
        Size Chart
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasCloseButton={true}
        classes="max-w-2xl"
      >
        <h4 className="mb-2 border-b py-4 px-5 text-lg font-bold">
          Size Chart
        </h4>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chest (in)
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Waist (in)
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hips (in)
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Shirts */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">XS</td>
              <td className="px-6 py-4 whitespace-nowrap">32-34</td>
              <td className="px-6 py-4 whitespace-nowrap">24-26</td>
              <td className="px-6 py-4 whitespace-nowrap">34-36</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">S</td>
              <td className="px-6 py-4 whitespace-nowrap">34-36</td>
              <td className="px-6 py-4 whitespace-nowrap">26-28</td>
              <td className="px-6 py-4 whitespace-nowrap">36-38</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">M</td>
              <td className="px-6 py-4 whitespace-nowrap">36-38</td>
              <td className="px-6 py-4 whitespace-nowrap">28-30</td>
              <td className="px-6 py-4 whitespace-nowrap">38-40</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">L</td>
              <td className="px-6 py-4 whitespace-nowrap">38-40</td>
              <td className="px-6 py-4 whitespace-nowrap">30-32</td>
              <td className="px-6 py-4 whitespace-nowrap">40-42</td>
            </tr>

            {/* Jeans */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">28</td>
              <td className="px-6 py-4 whitespace-nowrap">28</td>
              <td className="px-6 py-4 whitespace-nowrap">26-28</td>
              <td className="px-6 py-4 whitespace-nowrap">36-38</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">30</td>
              <td className="px-6 py-4 whitespace-nowrap">30</td>
              <td className="px-6 py-4 whitespace-nowrap">28-30</td>
              <td className="px-6 py-4 whitespace-nowrap">38-40</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">32</td>
              <td className="px-6 py-4 whitespace-nowrap">32</td>
              <td className="px-6 py-4 whitespace-nowrap">30-32</td>
              <td className="px-6 py-4 whitespace-nowrap">40-42</td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">34</td>
              <td className="px-6 py-4 whitespace-nowrap">34</td>
              <td className="px-6 py-4 whitespace-nowrap">32-34</td>
              <td className="px-6 py-4 whitespace-nowrap">42-44</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
};
