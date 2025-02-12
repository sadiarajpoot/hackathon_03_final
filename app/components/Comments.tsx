"use client"
import React, { useState, useEffect } from 'react'

const Comments = () => {
  const [comment, setcomment] = useState("")
  const [comments, setcomments] = useState<string[]>([])

  // Load comments from localStorage when the component mounts
  useEffect(() => {
    const savedComments = localStorage.getItem("comments")
    if (savedComments) {
      setcomments(JSON.parse(savedComments))
    }
  }, [])

  // Save comments to localStorage whenever comments are updated
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem("comments", JSON.stringify(comments))
    }
  }, [comments])

  const addComment = (notrefresh: React.FormEvent) => {
    notrefresh.preventDefault()
    if (comment.trim()) {
      setcomments([comment, ...comments])
      setcomment("")
    }
  }

  return (
    <div className="max-w-2xl">
      {/* Comment Form */}
      <form
        className="flex flex-col sm:flex-row items-center gap-4 md:mt-8 mt-6 p-5 border-2 border-gray-300 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        onSubmit={addComment}
      >
        <input
          type="text"
          placeholder="Leave a comment..."
          className="flex-1 md:p-4 py-3 px-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out placeholder-gray-500 text-gray-700 text-lg"
          value={comment}
          onChange={(e) => setcomment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out"
        >
          Add Comment
        </button>
      </form>

      {/* Comments List */}
      <div className="mt-8 space-y-6">
        {comments.length > 0 ? (
          <ul>
            {comments.map((hereComments, index) => (
              <li
                key={index}
                className="bg-white p-5 rounded-lg shadow-lg border border-gray-300 hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <p className="text-gray-800 text-lg">{hereComments}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-lg">Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}

export default Comments
