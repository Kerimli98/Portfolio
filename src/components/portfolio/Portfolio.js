import "./portfolio.scss"
import {motion} from "framer-motion";
import Modal from "../Modal/Modal";
import {useState} from "react";

function Portfolio() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="portfolio">
            <div className="container">

                <div className="header">
                    <h2 className="header-main">Portfolio</h2>
                    <sub className="header-sub">// My latest works</sub>
                </div>
                <div className="projects">
                    <div className="project">
                        <div className="project-container">
                            <img src="photos/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={() => setIsOpen(true)} className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={() => setIsOpen(false)}>
                                Fancy Modal
                            </Modal>
                        </div>
                    </div>

                    <div className="project ">
                        <div className="project-container">
                            <img src="photos/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={() => setIsOpen(true)} className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={() => setIsOpen(false)}>
                                Fancy Modal
                            </Modal>

                        </div>
                    </div>

                    <div className="project ">
                        <div className="project-container">
                            <img src="photos/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={() => setIsOpen(true)} className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={() => setIsOpen(false)}>
                                Fancy Modal
                            </Modal>
                        </div>
                    </div>

                    <div className="project">
                        <div className="project-container">
                            <img src="photos/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={() => setIsOpen(true)} className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={() => setIsOpen(false)}>
                                Fancy Modal
                            </Modal>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Portfolio;