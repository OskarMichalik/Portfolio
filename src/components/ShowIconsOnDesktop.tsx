import classes from './ShowIconsOnDesktop.module.css';
import { locationInterface } from '../interfaces';

const ShowIconsOnDesktop: React.FC<{ setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    const portfolioIcon = require("../assets/person.png");
    const infoIcon = require("../assets/infoIcon.png");

    function openAppFn(name: locationInterface) {
        props.setLocation(name);
        if (!props.openedApps.includes(name)) props.setOpenedApps(prev => { return [...prev, name] })
    }

    return <div className={classes.showIconsDiv}>
        <div className={classes.desktopAppDiv}
            onClick={() => openAppFn("portfolio")}
        >
            <img src={portfolioIcon} alt='portfolio' />
            <p>MyPortfolio</p>
        </div>
        <div className={classes.desktopAppDiv}
            onClick={() => openAppFn("info")}
        >
            <img src={infoIcon} alt='info' />
            <p>Info About Me</p>
        </div>
    </div>
}
export default ShowIconsOnDesktop