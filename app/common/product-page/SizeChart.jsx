import { Modal } from "components/Modal";
import React, { useState } from "react";

export const SizeChart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="text-sm text-blue-400 hover:text-red-500 hover:underline"
      >
        Size Chart
      </button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        hasCloseButton={true}
        classes="max-w-2xl"
      >
        <h4 className="text-dark mb-2 border-b px-5 py-4 text-lg  font-bold">
          Size Chart
        </h4>
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Size
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Chest (in)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Waist (in)
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Hips (in)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
            {/* Shirts */}
            <tr>
              <td className="whitespace-nowrap px-6 py-4">XS</td>
              <td className="whitespace-nowrap px-6 py-4">32-34</td>
              <td className="whitespace-nowrap px-6 py-4">24-26</td>
              <td className="whitespace-nowrap px-6 py-4">34-36</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">S</td>
              <td className="whitespace-nowrap px-6 py-4">34-36</td>
              <td className="whitespace-nowrap px-6 py-4">26-28</td>
              <td className="whitespace-nowrap px-6 py-4">36-38</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">M</td>
              <td className="whitespace-nowrap px-6 py-4">36-38</td>
              <td className="whitespace-nowrap px-6 py-4">28-30</td>
              <td className="whitespace-nowrap px-6 py-4">38-40</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">L</td>
              <td className="whitespace-nowrap px-6 py-4">38-40</td>
              <td className="whitespace-nowrap px-6 py-4">30-32</td>
              <td className="whitespace-nowrap px-6 py-4">40-42</td>
            </tr>

            {/* Jeans */}
            <tr>
              <td className="whitespace-nowrap px-6 py-4">28</td>
              <td className="whitespace-nowrap px-6 py-4">28</td>
              <td className="whitespace-nowrap px-6 py-4">26-28</td>
              <td className="whitespace-nowrap px-6 py-4">36-38</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">30</td>
              <td className="whitespace-nowrap px-6 py-4">30</td>
              <td className="whitespace-nowrap px-6 py-4">28-30</td>
              <td className="whitespace-nowrap px-6 py-4">38-40</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">32</td>
              <td className="whitespace-nowrap px-6 py-4">32</td>
              <td className="whitespace-nowrap px-6 py-4">30-32</td>
              <td className="whitespace-nowrap px-6 py-4">40-42</td>
            </tr>
            <tr>
              <td className="whitespace-nowrap px-6 py-4">34</td>
              <td className="whitespace-nowrap px-6 py-4">34</td>
              <td className="whitespace-nowrap px-6 py-4">32-34</td>
              <td className="whitespace-nowrap px-6 py-4">42-44</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
};
