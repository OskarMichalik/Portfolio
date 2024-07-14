import { AnimatePresence } from 'framer-motion';
import Portfolio from './desktopApps/Portfolio';
import classes from './ShowApps.module.css';
import { locationInterface } from '../interfaces';
import Info from './desktopApps/Info';

const ShowApps: React.FC<{ location: locationInterface, setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    return <div className={classes.showAppsDiv}>
        <AnimatePresence>
            {props.openedApps.includes("portfolio") && <Portfolio setLocation={props.setLocation} location={props.location} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />}
        </AnimatePresence>
        <AnimatePresence>
            {props.openedApps.includes("info") && <Info setLocation={props.setLocation} location={props.location} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />}
        </AnimatePresence>
    </div>
}
export default ShowApps;