import classes from './Portfolio.module.css';
import TopBar from './TopBar';
import { motion } from 'framer-motion';
import { locationInterface } from '../../interfaces';

const Portfolio: React.FC<{ setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, location: locationInterface, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    return <motion.div
        className={classes.portfolioDiv}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: props.location === "portfolio" ? 1 : 0.5, opacity: props.location === "portfolio" ? 1 : 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.1, bounce: 0 }}
        style={{ zIndex: props.location === "portfolio" ? 10 : 0 }}
    >
        <TopBar location={"portfolio"} setLocation={props.setLocation} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />
        <div className={classes.portfolioContentDiv}>
            <div className={classes.content}>
                test
            </div>
        </div>
    </motion.div>
}

export default Portfolio;