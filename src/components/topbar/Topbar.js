import './topbar.scss'

function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <i className="fas fa-chevron-left"></i>
                    <div className="logo">javid</div>
                    <i className="fas fa-chevron-right"></i>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;