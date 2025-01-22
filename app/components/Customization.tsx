"use client";
import { useState } from 'react';

const ProductCustomization = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [customStyle, setCustomStyle] = useState<string | null>(null);
  const [customizations, setCustomizations] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load customization from localStorage during component initialization (without useEffect)
  if (!customizations) {
    const savedCustomizations = localStorage.getItem('customStyle');
    if (savedCustomizations) {
      setCustomizations(JSON.parse(savedCustomizations));
    }
  }

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(e.target.value);
  };

  const handleCustomStyleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomStyle(e.target.value);
  };

  const handleSaveCustomization = () => {
    const customizationData = {
      size: selectedSize,
      style: customStyle,
    };
    localStorage.setItem('customStyle', JSON.stringify(customizationData));
    setCustomizations(customizationData);
    setIsModalOpen(false);  // Close the modal after saving
  };

  const handleDeleteCustomization = () => {
    localStorage.removeItem('customStyle');
    setCustomizations(null); // Clear the state
  };

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-500 text-white hover:bg-green-600 px-6 py-2 rounded-lg shadow-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300"
      > 
        Customize Design
      </button>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-96 max-w-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Customize Your Design</h3>

            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-700">Select Size </h4>
              <select
                className="p-3 border border-gray-300 rounded-lg mt-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedSize || ''}
                onChange={handleSizeChange}
              >
                <option value="">Select Size</option>
                {/* Sample Sizes Dropdown */}
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-medium text-gray-700">Enter Custom Style</h4>
              <textarea
                className="p-3 border border-gray-300 rounded-lg mt-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={customStyle || ''}
                onChange={handleCustomStyleChange}
                placeholder="Write your custom design here... (Optional)"
              />
            </div>

            <div className="flex justify-end gap-4">
              <button
                onClick={handleSaveCustomization}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
              >
                Save Customization
              </button>
              <button
                onClick={() => setIsModalOpen(false)}  // Close the modal without saving
                className="bg-gray-300 text-black px-6 py-2 rounded-lg shadow-md hover:bg-gray-400 focus:outline-none transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Display Customizations */}
      {customizations && (
        <div className="mt-6">
          <h4 className="text-xl font-semibold text-gray-800">Your Customization</h4>
          <p><strong>Size:</strong> {customizations.size || "Not selected"}</p>
          <p><strong>Style:</strong> {customizations.style || "Not provided"}</p>

          {/* Delete Customization Button */}
          <button
            onClick={handleDeleteCustomization}
            className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Delete Customization
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCustomization;
