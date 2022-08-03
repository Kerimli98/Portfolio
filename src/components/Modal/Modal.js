import React from 'react';
import './modal.scss';
import ReactDOM from "react-dom";
import ImageSlider from "../Slider/ImageSlider";
import {SliderData} from "../Slider/SliderData";

function Modal({open, children, onclose}) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div className="overlay"/>
            <div className="modal"

            >

                <div className="left">
                    <ImageSlider slides={SliderData}/>
                </div>
                <div className="right">
                    <button className="close-btn" onClick={onclose}><i className="close far fa-times-circle"></i>
                    </button>
                    <h1 className="project-name">Some Project</h1>
                    <div className="tools">
                        <div className="tool">
                            <p className="tool-name">Docker</p>
                        </div>
                        <div className="tool">
                            <p className="tool-name">Jenkins</p>

                        </div>
                        <div className="tool">
                            <p className="tool-name">Kubernetes</p>

                        </div>
                        <div className="tool">
                            <p className="tool-name">Python</p>

                        </div>
                        <div className="tool">
                            <p className="tool-name">Kubernetes</p>
                        </div>
                        <div className="tool">
                            <p className="tool-name">Kubernetes</p>
                        </div>
                        <div className="tool">
                            <p className="tool-name">Kubernetes</p>
                        </div>
                        <div className="tool">
                            <p className="tool-name">Kubernetes</p>
                        </div>


                    </div>
                    <div className="about-section">
                        <h3 className="about-header">About</h3>
                        <p className="about-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id animi, necessitatibus ut sapiente quod magni alias ipsum modi magnam tempora soluta? Provident accusantium blanditiis recusandae magnam tenetur doloribus error cupiditate enim eligendi, praesentium nostrum quidem! Eum illo pariatur veniam odio, atque, quas id voluptatibus tenetur, dolores optio et! Dolorem?
                          </p>
                    </div>

                    <button className="code-btn"><i className="fas fa-code"></i> Code</button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    );
}

export default Modal;