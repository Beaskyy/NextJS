import React, { useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const fetchComments = async () => {
    const response = await fetch("http://localhost:3000/api/comments");
    const data = await response.json();
    console.log(data);
    setComments(data);
  };

  const submitComment = async () => {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment,
      }),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const data = await response.json()
    console.log(data)
  };

  const deleteComment = async (commentId) => {
    const response = await fetch(`http://localhost:3000/api/comments/${commentId}`, {
      method: 'DELETE'
    })
    const data = await response.json()
    console.log(data)
    fetchComments()
  }
  return (
    <div>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button onClick={submitComment}>submit comment</button>
      <button onClick={fetchComments}>load comments</button>
      {comments.map((comment) => (
        <div key={comment.id}>
          <>
            {comment.id} {comment.text}
            <button onClick={() => deleteComment(comment.id)}>Delete comment</button>
          </>
        </div>
      ))}
    </div>
  );
};

export default Comments;
