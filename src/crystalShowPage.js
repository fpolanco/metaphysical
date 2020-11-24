import React, {useState}  from 'react';
import CommentCard from './commentCard';


const CrystalShowPage = (props) => {
    // const [comments, setComments] = useState([])
    console.log(props.crystal.comments)
    const renderHome = () => {
        props.handleCrystalState(null)
    }
   
    return (
    <div>
        <button onClick={renderHome}>Home</button> 
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        {props.crystal.name}
        <br>
        </br>
        <br>
        </br>
        <img src={props.crystal.image} alt={props.crystal.name}/>
        <br></br>
        {props.crystal.description}
        <br></br>
       
        {props.crystal.birthstone_value} 
        <br></br>
        {props.crystal.zodiac_value}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <iframe width="420" height="345" src="https://www.youtube.com/embed/qeySxKhhjxs">
</iframe>
        <CommentCard comments={props.crystal.comments} />
    </div>
    )}


    export default CrystalShowPage
