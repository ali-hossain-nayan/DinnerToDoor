'use client'


import React, { useState, useEffect } from 'react';

const CommentSection = () => {
  const [comments, setComments] = useState(() => {
    const storedComments = localStorage.getItem('comments');
    return storedComments ? JSON.parse(storedComments) : [];
  });
  const [newComment, setNewComment] = useState('');
  const [editMode, setEditMode] = useState(null);
  const [editedText, setEditedText] = useState('');

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const postComment = () => {
    if (!newComment.trim()) return;
    const newCommentObj = { id: Date.now(), text: newComment.trim() };
    setComments([...comments, newCommentObj]);
    setNewComment('');
  };

  const deleteComment = (commentId:any) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);
  };

  const startEditing = (commentId:any, text:any) => {
    setEditMode(commentId);
    setEditedText(text);
  };

  const cancelEditing = () => {
    setEditMode(null);
    setEditedText('');
  };

  const saveEditedComment = (commentId:any) => {
    const updatedComments = comments.map(comment => {
      if (comment.id === commentId) {
        return { ...comment, text: editedText };
      }
      return comment;
    });
    setComments(updatedComments);
    setEditMode(null);
    setEditedText('');
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mb-2">
            {editMode === comment.id ? (
              <div className="flex items-center">
                <textarea
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mr-2"
                  rows={2}
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2" onClick={() => saveEditedComment(comment.id)}>Save</button>
                <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={() => cancelEditing()}>Cancel</button>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <p className="text-gray-800">{comment.text}</p>
                <div>
                  <button className="text-blue-500 mr-2" onClick={() => startEditing(comment.id, comment.text)}>
                    Edit
                  </button>
                  <button className="text-red-500" onClick={() => deleteComment(comment.id)}>
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md mt-4"
        placeholder="Write your comment..."
      />
      <button
        onClick={postComment}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
      >
        Post Comment
      </button>
    </div>
  );
};

export default CommentSection;
