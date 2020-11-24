import React, {useState}  from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


          
const CrystalCards = (props) => {
    // const [showFront, setShowFront] = useState(true)
    
    const toggleCard = () => {
        // setShowFront(!showFront)
        props.handleCrystalState(props.crystal)

    }


    const renderCard = () => {
        // if (showFront) {
            return (
                <div onClick={toggleCard}>
                <Card>
                <Image className="crystal-img" size='medium' rounded src={props.crystal.image} wrapped ui={false} />
                <Card.Content>
                <Card.Header>{props.crystal.name}</Card.Header>
                  <Card.Meta>
                    <span className='birthstone'>{props.crystal.birthstone_value}</span>
                  </Card.Meta>
                  <Card.Description>
                    {props.crystal.bio}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a>
                    <Icon name='comments' />
                    {
    
                    }
                  </a>
                </Card.Content>
              </Card>
              </div>
            )
    //     } else {

    //    return (
    //     <div onClick={toggleCard}>
    //       cardBack
    //     </div>   
    //    )

    //     }




    }




     return (
      <div>
         { renderCard() }  
     </div>
     )}


        // const CrystalCards = (props) => (
            
        //     <Card
        //       image={props.crystal.image}
        //       name={props.crystal.name}
        //       bio={props.crystal.bio}
        //     />
        //   )
         

    

export default CrystalCards