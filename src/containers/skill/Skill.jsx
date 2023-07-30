import React from 'react'
import './skill.css'
import Showcase from '../../components/showcase/Showcase'
import { Carousel} from "@material-tailwind/react";

const Skill = (props) => {

return (
    <div className='container' id={props.id}>
        
        <h1>{props.title}</h1>

        <Carousel className="cwrapper carousel">

            {
                props.arr.map( (item) => 
                    <Showcase key={item.id} photo={item.ssrrcc} ttext={item.ttext} dtext={item.dtext} flag={props.flag} git={props.git} />
                )
                
            }
            
            
{/* 
            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                        src="images/danceFinal.png"
                        alt="image 1"
                        className="object-cover rounded-xl"
                        />
                    </div> 
                </div>
                

                <div className="right">

                    <div className="title">
                        <Typography className="title-text">
                            Spring Fiesta Poster Designs
                        </Typography>
                    </div>

                    <div className="description">
                        <Typography className="description-text">
                            Spring Fiesta is our college's annual fest.
                            I worked there as a Designer for social media posts.
                        </Typography>
                    </div>

                </div>
        
            </div>

            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                        src="images/dramaFinal.png"
                        alt="image 1"
                        className="object-cover rounded-xl"
                        />
                    </div> 
                </div>
                

                <div className="right">

                    <div className="title">
                        <Typography className="title-text">
                            Spring Fiesta Poster Designs
                        </Typography>
                    </div>

                    <div className="description">
                        <Typography className="description-text">
                            Spring Fiesta is our college's annual fest.
                        </Typography>
                        <Typography className="description-text">
                            I worked there as a Designer for social media posts.
                        </Typography>
                    </div>

                </div>
        
            </div>

            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                        src="images/musicFinal.png"
                        alt="image 1"
                        className="object-cover rounded-xl"
                        />
                    </div> 
                </div>
                

                <div className="right">

                    <div className="title">
                        <Typography className="title-text">
                            Spring Fiesta Poster Designs
                        </Typography>
                    </div>

                    <div className="description">
                        <Typography className="description-text">
                            Spring Fiesta is our college's annual fest.
                        </Typography>
                        <Typography className="description-text">
                            I worked there as a Designer for social media posts.
                        </Typography>
                    </div>

                </div>
        
            </div>

            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                        src="images/pitchIt.jpg"
                        alt="image 1"
                        className="object-cover rounded-xl"
                        />
                    </div> 
                </div>
                

                <div className="right">

                    <div className="title">
                        <Typography className="title-text">
                            Spring Fiesta Poster Designs
                        </Typography>
                    </div>

                    <div className="description">
                        <Typography className="description-text">
                            Spring Fiesta is our college's annual fest.
                        </Typography>
                        <Typography className="description-text">
                            I worked there as a Designer for social media posts.
                        </Typography>
                    </div>

                </div>
        
            </div>

            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                        src="images/ideaToMvp.jpg"
                        alt="image 1"
                        className="object-cover rounded-xl"
                        />
                    </div> 
                </div>
                

                <div className="right">

                    <div className="title">
                        <Typography className="title-text">
                            Spring Fiesta Poster Designs
                        </Typography>
                    </div>

                    <div className="description">
                        <Typography className="description-text">
                            Spring Fiesta is our college's annual fest.
                        </Typography>
                        <Typography className="description-text">
                            I worked there as a Designer for social media posts.
                        </Typography>
                    </div>

                </div>
        
            </div> */}

        </Carousel>   
    </div>
  )
}

export default Skill