import { useNavigate } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import socialMedia from "../configs/socialMedia";
import routes from '../configs/routes';
import navBarMenu from '../configs/navbar';

export function ToAcceuil() {
    const navigate = useNavigate();
    navigate("/");
}

export function ToCV() {
    const navigate = useNavigate();
    navigate("/cv");
}

export function ToFormation() {
    const navigate = useNavigate();
    navigate("/formation");
}

export function ToExperiance() {
    const navigate = useNavigate();
    navigate("/experiance");
}

export function ToContactMe() {
    const navigate = useNavigate();
    navigate("/contactme");
}

export function handleClick(icon) {
    switch (icon) {
        case BsFacebook:
            window.open(socialMedia.facebook);
            break;
        case BsInstagram:
            window.open(socialMedia.instagram);
            break;
        case BsTwitter:
            window.open(socialMedia.twitter);
            break;
        case BsLinkedin:
            window.open(socialMedia.linkedin);
            break;
        case BsGithub:
            window.open(socialMedia.github);
            break;
        case SiGmail:
            window.open(socialMedia.gmail, "_blank");
            break;
        default:
            break;
    }
}

export function getCurrentPage() {
    const url = window.location.href.split("/");
    let i = url.length;
    do {
        switch ("/portfolio/" + url[i]) {
            case routes.home:
                return navBarMenu.home;
            case routes.cv:
                return navBarMenu.cv;
            case routes.formation:
                return navBarMenu.formation;
            case routes.experiance:
                return navBarMenu.experiance;
            case routes.contact:
                return navBarMenu.contact;
            case routes.feedback:
                return navBarMenu.feedback;
            default:
                break;
        }
        i--;
    } while (i > 0);
}