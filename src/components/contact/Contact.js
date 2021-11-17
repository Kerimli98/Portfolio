import "./contact.scss"

function Contact(props) {
    return (
        <div className="contact">
                <a href="https://github.com/Kerimli98" className="github">Github
                    <span><i className="fab fa-github"></i></span>
                </a>
                <a href="https://www.linkedin.com/in/fatima-karimli-2899ba212/" className="linkedin">Linkedin
                    <span><i className="fab fa-linkedin-in"></i></span>
                </a>
                <a href="" className="email">Email
                    <span><i className="far fa-envelope"></i></span>
                </a>
                <a href="" className="resume">Resume
                    <span><i className="fas fa-user"></i></span>
                </a>
        </div>
    );
}

export default Contact;