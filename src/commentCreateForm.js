// import React, { useState, useEffect } from 'react';
// import { Button } from 'semantic-ui-react'

// const initialFormState = {
//     body:"body",
// };
// const NewJobForm = props => {
//   const [comment, setComment] = useState(props.initialFormState);

 
// // const addComment = comment => {
// //     useEffect(() => {
// //         fetch("http://localhost:3000/comments")
// //          .then(r => r.json())
// //          .then(console.log)
// }

//   const handleInputChange = event => {
//     const { name, value } = event.target
//     setComment({ ...comment, [name]: value })
//   };

//   return (

//     <form onSubmit= {event => {
//         event.preventDefault()
//         if (!comment.body) return;
//         props.addComment(comment)
//         setComment(props.initialFormState)
//     }}>
//     <label>Leave A Comment</label>
//     <input> type="text" value={comment.body} onChange={handleInputChange}</input>
//     <Button>Add Comment</Button>
//    </form>
//   )

//    ;


// export default NewJobForm;