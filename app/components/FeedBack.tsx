"use client";
import React, { useState } from "react";

const FeedBack = () => {
  const [feedback, setFeedback] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const handleFeedbackSubmit = () => {
    if (feedback.trim() === "") {
      alert("Please provide feedback.");
      return;
    }
  };

  return (
    <div>
      {/* Blue Link */}
      <p>
        <button
          onClick={() => setShowModal(true)}
          className="text-blue-500 underline hover:text-blue-700">
          Give Feedback
        </button>
      </p>

      {/* Feedback Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
              className="border px-4 py-2 mb-4 w-full h-32"
            ></textarea>
            <div className="flex justify-end space-x-4">
              {/* Cancel Button */}
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              {/* Submit Button */}
              <button
                onClick={handleFeedbackSubmit}
                className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeedBack;
