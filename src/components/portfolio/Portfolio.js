import "./portfolio.scss";
import Modal from "../Modal/Modal";
import { SliderData } from "../Slider/SliderData";

import { useState } from "react";

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
          {SliderData.map((item) => (
            <div className="project">
              <div className="project-container">
                <img src={item.image} alt="" />
              </div>
              <div className="details">
                <h3>Name of the Project</h3>
                <button onClick={() => setIsOpen(true)} className="project-btn">
                  View Project
                </button>
                <Modal open={isOpen} onclose={() => setIsOpen(false)}>
                  Fancy Modal
                </Modal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
