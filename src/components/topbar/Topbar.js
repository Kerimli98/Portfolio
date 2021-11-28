import './topbar.scss'
import {motion} from "framer-motion";
import {Link} from 'react-router-dom';


function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <Link to='/'>
                <motion.div className="left"
                            animate={{y: 0}}
                            initial={{y: -250}}
                                transition={{delay: 0.2,type:'spring',stiffness:120}}
                >
                    <i className="fas fa-chevron-left"></i>
                    <div className="logo">javid</div>
                    <i className="fas fa-chevron-right"></i>

                </motion.div>
                </Link>
                <div className="right">
                    <motion.div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}
                                animate={{y: 0}}
                                initial={{y: -250}}
                                transition={{delay: 0.2,type:'spring', stiffness: 120}}

                    >
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;