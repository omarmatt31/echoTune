import { Link } from "react-router";
import badgeapple from "../../assets/badge-apple-store.svg"
import googleplay from "../../assets/google-play-badge-bb.svg"

const Footer = () => {
    return (
 <footer className="py-4 bg-info">
    <div className="row">
        <h2 className=" text-light text-center fs-1">EchoTune</h2>
         <div className="col-12 col-md-6 col-lg-4 text-center border border-danger">
                    <h5 className="text-light">Mobile</h5>
                    <div className="d-flex">
                    </div>
         </div>
                <div className="col-12 col-md-6 col-lg-4 text-center border border-danger">
                    <ul className="list-unstyled text-light text-light">
                        <li><Link className="link">Inicio</Link></li>
                        <li><Link className="link">Nosotros</Link></li>
                        <li><Link className="link"></Link></li>
                        <li><Link className="link">Iniciar Sesión</Link></li>
                    </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-4 text-center border border-danger">
                <h5 className="text-light">Seguinos</h5>
                <div className="d-flex justify-content-center">
                    <i className="bi bi-twitter-x text-light fs-3"></i>
                    <i className="bi bi-facebook text-primary fs-3"></i>
                    <i className="bi bi-instagram fs-3 text-instagram"></i>
                </div>
                </div>
                </div>
        </footer>
    );
};

export default Footer;