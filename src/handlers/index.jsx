import { useNavigate } from 'react-router-dom';
import {
    BsFacebook, BsInstagram, BsTwitter, BsLinkedin,
    BsGithub, BsInfoCircle, BsBookHalf, BsCodeSlash,
    BsPencilSquare, BsHouseDoor, BsChatLeftText
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import socialMedia from "../settings/socialMedia";
import routes from '../settings/routes';
import navBarMenu from '../settings/navbar';

// export function ToAcceuil() {
//     const navigate = useNavigate();
//     navigate(routes.home, { replace: true });
// }

// export function ToCV() {
//     const navigate = useNavigate();
//     navigate(routes.cv, { replace: true });
// }

// export function ToFormation() {
//     const navigate = useNavigate();
//     navigate(routes.formation, { replace: true });
// }

// export function ToExperiance() {
//     const navigate = useNavigate();
//     navigate(routes.experience, { replace: true });
// }

// export function ToContactMe() {
//     const navigate = useNavigate();
//     navigate(routes.contact, { replace: true });
// }

// export function ToFeedback() {
//     const navigate = useNavigate();
//     navigate(routes.feedback, { replace: true });
// }

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

export function getPageIcon() {
    const page = getCurrentPage();
    switch (page) {
        case navBarMenu.home:
            return BsHouseDoor;
        case navBarMenu.cv:
            return BsInfoCircle;
        case navBarMenu.formation:
            return BsBookHalf;
        case navBarMenu.experiance:
            return BsCodeSlash;
        case navBarMenu.contact:
            return BsChatLeftText;
        case navBarMenu.feedback:
            return BsPencilSquare;
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