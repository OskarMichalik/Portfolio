import { AnimatePresence } from 'framer-motion';
import classes from './MenuBar.module.css';
import { motion } from 'framer-motion';
import { locationInterface } from '../interfaces';
import MenuClock from './MenuClock';

const MenuBar: React.FC<{ location: locationInterface, setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, openedApps: locationInterface[] }> = (props) => {
    const personIcon = require("../assets/person.png");
    const infoIcon = require("../assets/infoIcon.png");

    function changeOpenAppFn(name: locationInterface) {
        if (props.location === name) {
            props.setLocation("desktop");
        }
        else {
            props.setLocation(name);
        }
    }
    return <div className={classes.menuBarDiv} >
        <motion.div className={classes.openedAppsMenuBarDiv} layout>
            <AnimatePresence>
                {
                    props.openedApps.includes("portfolio") && <motion.div className={classes.barAppIcon}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2, bounce: 0 }}
                        whileHover={{ backgroundColor: "#ffffff81" }}
                        onClick={() => changeOpenAppFn("portfolio")}
                        layout
                    >
                        <img src={personIcon} alt='person icon' /></motion.div>
                }
            </AnimatePresence>
            <AnimatePresence>
                {
                    props.openedApps.includes("info") && <motion.div className={classes.barAppIcon}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.2, bounce: 0 }}
                        whileHover={{ backgroundColor: "#ffffff81" }}
                        onClick={() => changeOpenAppFn("info")}
                        layout
                    >
                        <img src={infoIcon} alt='info icon' /></motion.div>
                }
            </AnimatePresence>
        </motion.div>
        <MenuClock />
    </div>
}

export default MenuBar;