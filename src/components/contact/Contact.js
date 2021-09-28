import "./home.scss"

function Home(props) {
    return (
        <div className="home">
            <div className="sidebar">
                <a href="" className="github">Github
                    <span><i className="fab fa-github"></i></span>
                </a>
                <a href="" className="linkedin">Linkedin
                    <span><i className="fab fa-linkedin-in"></i></span>
                </a>
                <a href="" className="email">Email
                    <span><i className="far fa-envelope"></i></span>
                </a>
                <a href="" className="resume">Resume
                    <span><i className="fas fa-user"></i></span>
                </a>
            </div>
        </div>
    );
}

export default Home;