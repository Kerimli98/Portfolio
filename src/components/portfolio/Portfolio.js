import "./portfolio.scss"
import {motion} from "framer-motion";
import Modal from "../Modal/Modal";
import { useState} from "react";

function Portfolio() {
    const [isOpen, setIsOpen]=useState(false);
    return (
        <div className="portfolio">
            <div className="container">

                <div className="header">
                    <h2 className="header-main">Portfolio</h2>
                    <sub className="header-sub">// My latest works</sub>
                </div>
                <div className="projects"

                >
                    <motion.div className="project"
                                initial={{y: '-40vw'}}
                                animate={{y: 0}}
                                transition={{delay: 0.5, type: 'spring', stiffness: 120}}
                    >
                        <div className="project-container">
                            <img src="assets/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={()=>setIsOpen(true)}  className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
                                Fancy Modal
                            </Modal>

                        </div>
                    </motion.div>

                    <motion.div className="project "
                                initial={{y: '-40vw'}}
                                animate={{y: 0}}
                                transition={{delay: 0.9, type: 'spring', stiffness: 120}}
                    >
                        <div className="project-container">
                            <img src="assets/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={()=>setIsOpen(true)}  className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
                                Fancy Modal
                            </Modal>

                        </div>
                    </motion.div>

                    <motion.div className="project "
                                initial={{y: '-40vw'}}
                                animate={{y: 0}}
                                transition={{delay: 1.3, type: 'spring', stiffness: 120}}
                    >
                        <div className="project-container">
                            <img src="assets/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={()=>setIsOpen(true)}  className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
                                Fancy Modal
                            </Modal>
                        </div>
                    </motion.div>

                    <motion.div className="project"
                                initial={{y: '-40vw'}}
                                animate={{y: 0}}
                                transition={{delay: 1.7, type: 'spring', stiffness: 120}}
                    >
                        <div className="project-container">
                            <img src="assets/20210429214508_IMG_0671.JPG" alt=""/>
                        </div>
                        <div className="details">
                            <h3>Name of the Project</h3>
                            <button onClick={()=>setIsOpen(true)}  className="project-btn">View Project</button>
                            <Modal open={isOpen} onclose={()=>setIsOpen(false)}>
                                Fancy Modal
                            </Modal>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;