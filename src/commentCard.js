import React from 'react'
import CommentCreateForm from './commentCreateForm'
import { Button, Comment, Form, Header, CommentActions } from 'semantic-ui-react'


const CommentCard = (props) => {
//     const initialFormState = {
//         body:'',
//     };
// // const addComment = comment => {
// //     useEffect(() => {
// //         fetch("http://localhost:3000/comments")
// //          .then(r => r.json())
// //          .then(console.log)
// }

    return (
    <Comment.Group>
        <Header as='h3' dividing>
          Comments
        </Header>
        {
        props.comments.map((comment) =>  {
            console.log (comment)
            return <Comment>
            <Comment.Avatar src='/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'></Comment.Author>
                <Comment.Metadata>
                <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>{comment.body}</Comment.Text>
                <Comment.Actions>
                <Comment.Action>Add Comment</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
            </Comment> 

            
            })
        }

{/* <div className="comment-create">
          {value.map((comment) =>(     
             <CommentCreateForm comment={comment} key={comment.id} addComment={props.addComment}
             />
          ))}
        </div> */}
    );
   
 </Comment.Group>
    )
          }
   


export default CommentCard
