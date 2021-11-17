import "./about.scss"
import Contact from "../contact/Contact";
import {init} from 'ityped'
import {useEffect, useRef} from "react";


function About() {
    const textRef = useRef()
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            strings: ["Hey, It's Javid Hussain"],
            backDelay: 1500,
            backSpeed: 60,
            loop: false
        })

    }, [])
    return (
        <div className="about">
            <Contact/>
            <div className="about-container">
                <h1 className="header" ref={textRef}></h1>
                <p className="about-primary">
                    <span>I'm </span>
                    <span>a </span>
                    <span>DevOps </span>
                    <span>Engineer</span>
                    <span>based </span>
                    <span>in </span>
                    <span>Baku, </span>
                    <span>Azerbaijan. </span>
                </p>
                <p className="about-secondary">
                    <span>Feel </span>
                    <span>free </span>
                    <span>to </span>
                    <span>reach </span>
                    <span>me </span>
                    <span>out.</span>
                </p>
                <p className="about-secondary">
                    <span>Let's </span>
                    <span>create </span>
                    <span>something </span>
                    <span>magnificent.</span>
                </p>
                <div className="wrapper">
                    <div className="link_wrapper">
                        <a href="#">See Projects</a>
                        <div className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                <path
                                    d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default About;