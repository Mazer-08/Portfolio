import React from 'react'
import './showcase.css'

import {Typography} from "@material-tailwind/react";

const Showcase = (props) => {
  return (
    <>
        {/* <h1>hi</h1> */}
        <div className="celement">

            <div className="left">
                <div className="img">
                    <img
                    src={props.photo}
                    alt="image 1"
                    className="object-cover rounded-xl"
                    />
                </div> 
            </div>


            <div className="right">

                <div className="title">
                    <Typography className="title-text">
                        {props.ttext}
                    </Typography>
                </div>

                <div className="description">
                    <Typography className="description-text">
                        {props.dtext}
                    </Typography>
                    <Typography className="description-text">
                        {(props.flag==1)
                            ?<p>Check it out <a href={props.git} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            here</a>.</p>
                            :<p></p>
                        }
                    </Typography>
                </div>

            </div>

        </div>
    </>
  )
}

export default Showcase