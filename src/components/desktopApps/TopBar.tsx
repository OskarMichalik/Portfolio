import classes from './TopBar.module.css';
import { locationInterface } from '../../interfaces';
import { motion } from 'framer-motion';

const TopBar: React.FC<{ location: locationInterface, setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    const closeIcon = require("../../assets/closeIcon.png");
    const minimizeIcon = require("../../assets/minimizeIcon.png");
    const internetIcon = require("../../assets/internetIcon.png");
    function closeAppFn() {
        let newOpenedApps = props.openedApps;
        newOpenedApps.splice(props.openedApps.indexOf(props.location), 1);
        props.setOpenedApps(newOpenedApps);
        setTimeout(() => {
            props.setLocation("desktop");
        }, 100)
    }
    function minimizeAppFn() {
        props.setLocation("desktop");
    }
    return <div className={classes.topBarDiv}>
        <div className={classes.appLabelDiv}><img src={internetIcon} alt='internet icon' /><p>{props.location}</p></div>
        <div className={classes.toolsDiv}>
            <motion.img src={minimizeIcon} alt='minimize icon' onClick={() => minimizeAppFn()} className={classes.toolsIcons} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} />
            <motion.img src={closeIcon} alt='close icon' onClick={() => closeAppFn()} className={classes.toolsIcons} whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} />
        </div>
    </div>
}

export default TopBar;