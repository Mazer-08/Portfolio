import React from 'react'
import './showcase.css'

import { Typography } from "@material-tailwind/react";

const Showcase = (props) => {
    return (
        <>
            {/* <h1>hi</h1> */}
            <div className="celement">

                <div className="left">
                    <div className="img">
                        <img
                            src={props.photo}
                            alt="ehe 1"
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
                            {(props.flag === 1) && (
                                <div className="btn-container">
                                    <a href={props.git} className="project-btn">
                                        Check it out here
                                    </a>
                                </div>
                            )}
                        </Typography>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Showcase