import { Link } from "react-router";
import badgeapple from "../../assets/badge-apple-store.svg"
import googleplay from "../../assets/google-play-badge-bb.svg"
import echoLogo from "../../assets/echoTune_Logo-negativo.png"

const Footer = () => {
    return (
 <footer className=" bg-dark-subtle py-3 pe-3 ps-3">
    <div className="row">
        <div className="col-12 col-md-12 col-lg-12 text-center">
            <Link className="link"><img src={echoLogo} alt="logotipo" className="img-fluid logotipo"/></Link>
        </div>
         <div className="col-12 col-md-6 col-lg-4 text-center ps-5">
                    <h4 className="text-light">Disponible en mobiles</h4>
                    <div className="d-flex justify-content-center gap-2">
                        <Link className="link"><img src={badgeapple} alt="appstore" className=" img-fluid appstore"/></Link>
                        <Link className="link"><img src={googleplay} alt="playstore" className="img-fluid playstore"/></Link>
                    </div>
          </div>
                <div className="col-12 col-md-6 col-lg-4 text-center">
                    <ul className="list-unstyled">
                        <Link className="link text-light fs-5"><li>Inicio</li></Link>
                       <Link className="link text-light fs-5"> <li>Nosotros</li></Link>
                        <Link className="link text-light fs-5"><li>Registrarse</li></Link>
                       <Link className="link text-light fs-5"> <li>Iniciar Sesión</li></Link>
                    </ul>
                </div>
                <div className="col-12 col-md-12 col-lg-4 text-center pe-5">
                <h4 className="text-light my-2">Seguinos en nuestras redes</h4>
                <div className="d-flex justify-content-center gap-3">
                    <Link className="link text-light"><i className="bi bi-twitter-x text-light fs-2"></i></Link>
                    <Link className="link text-light"><i className="bi bi-facebook color-facebook fs-2"></i></Link>
                    <Link className="link text-light"><i className="bi bi-instagram fs-2 color-instagram"></i></Link>
                    </div>
                </div>
                </div>
        </footer>
    );
};

export default Footer;