// Footer Component
import "./styles/Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div id="row1" className="row ">
                    <a
                        href="https://www.linkedin.com/in/divya-sri-arumilli-51938b296/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-linkedin"></i>
                    </a>
                    <a
                        href="https://github.com/darumilli"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/divya_arumilli/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>
                </div>
                <div id="row1" className="row">
                    © Developed By Divya Arumilli
                </div>
            </div>
        </footer>
    );
};

export default Footer;
