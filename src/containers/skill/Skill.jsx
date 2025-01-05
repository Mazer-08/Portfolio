import React from 'react'
import './skill.css'
import Showcase from '../../components/showcase/Showcase'
import { Carousel} from "@material-tailwind/react";

const Skill = (props) => {

return (
    <div className='container' id={props.id}>
        
        <h1>{props.title}</h1>

        <Carousel className="cwrapper carousel" style={{width:"95%"}}>

            {
                props.arr.map( (item) => 
                    <Showcase key={item.id} photo={item.ssrrcc} ttext={item.ttext} dtext={item.dtext} flag={props.flag} git={item.link} />
                )
                
            }
        </Carousel>   
    </div>
  )
}

export default Skill