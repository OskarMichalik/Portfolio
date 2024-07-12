import classes from './Info.module.css';
import { locationInterface } from '../../interfaces';
import { motion } from 'framer-motion';
import TopBar from './TopBar';

const Info: React.FC<{ location: locationInterface, setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    return <motion.div
        className={classes.infoDiv}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: props.location === "info" ? 1 : 0.5, opacity: props.location === "info" ? 1 : 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.1, bounce: 0 }}
        style={{ zIndex: props.location === "info" ? 10 : 0 }}
    >
        <TopBar location={"info"} setLocation={props.setLocation} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />
        <div className={classes.infoContentDiv}>
            <div className={classes.content}>
                test
            </div>
        </div>
    </motion.div>
}

export default Info;