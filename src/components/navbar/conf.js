import navBarMenu from "../../settings/navbar";
import routes from "../../settings/routes";
import {
    BsInfoCircle, BsBookHalf, BsCodeSlash,
    BsPencilSquare, BsChatLeftText, BsHouseDoor
} from "react-icons/bs";

const navbarSettings = {
    "link": [
        { id: 1, icon: BsHouseDoor, title: navBarMenu.home, path: routes.home },
        // { id: 2, icon: BsInfoCircle, title: navBarMenu.cv, path: routes.cv },
        { id: 3, icon: BsBookHalf, title: navBarMenu.formation, path: routes.formation },
        { id: 4, icon: BsCodeSlash, title: navBarMenu.experience, path: routes.experience },
        { id: 5, icon: BsChatLeftText, title: navBarMenu.contact, path: routes.contact },
        { id: 6, icon: BsPencilSquare, title: navBarMenu.feedback, path: routes.feedback },
    ],
    "conf": {
        "width": "250px",
        "smallWidth": "150px",
        "height": "50px",
    }
};

export default navbarSettings;
// module.exports = navbarConf;