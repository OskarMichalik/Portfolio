import classes from './Portfolio.module.css';
import TopBar from './TopBar';
import { motion } from 'framer-motion';
import { locationInterface } from '../../interfaces';

const Portfolio: React.FC<{ setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, location: locationInterface, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {

    let currentLocation: boolean = true;
    if (props.location !== "portfolio") {
        setTimeout(() => {
            currentLocation = false;
        }, 500)
    }

    return <motion.div
        className={classes.portfolioDiv}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: props.location === "portfolio" ? 1 : 0.5, opacity: props.location === "portfolio" ? 1 : 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2, bounce: 0 }}
        style={{ zIndex: currentLocation ? 10 : 0 }}

    >
        <TopBar location={"portfolio"} setLocation={props.setLocation} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />
        <motion.div className={classes.portfolioContentDiv} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.2 }}>
            <div className={classes.content}>
                <div className={classes.main}>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>Website Developer</motion.h1>
                    <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} >Oskar Michalik</motion.p>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} >&lt;/&gt;</motion.h1>
                </div>
                <div className={classes.showProjects}>
                    <h1>My Projects</h1>
                    <div className={classes.listProjects}>
                        <div className={classes.projectBlock}>
                            <h2>Next.js</h2>
                            <motion.a whileHover={{ x: 10 }} href='https://search-flights-project.web.app/'>&gt; Searching Flights (Website)</motion.a>
                            <motion.a whileHover={{ x: 10 }} href='https://github.com/OskarMichalik/Travel-From-Project'>&gt; Searching Flights (Github)</motion.a>
                            <motion.a whileHover={{ x: 10 }} href='https://github.com/OskarMichalik/Clothing-Shop-Project'>&gt; Clothing Shop (Github)</motion.a>
                            <motion.a whileHover={{ x: 10 }} href='https://github.com/OskarMichalik/Alien-Invasion-Hackathon'>&gt; Alien Invasion for SandCodes Hackathon (Github)</motion.a>
                        </div>
                        <div className={classes.projectBlock}>
                            <h2>Blockchain React</h2>
                            <motion.a whileHover={{ x: 10 }} href='https://github.com/OskarMichalik/blockchain-project'>&gt; Game (Github)</motion.a>
                        </div>
                        <div className={classes.projectBlock}>
                            <h2>React + TypeScript</h2>
                            <motion.a whileHover={{ x: 10 }} href='https://github.com/OskarMichalik/Portfolio'>&gt; This Portfolio :) (Github)</motion.a>
                        </div>
                    </div>
                </div>
                <div className={classes.projectGallery}>
                    gallery project...
                </div>
                <div className={classes.portfolioFooter}>
                    <hr />
                    <div className={classes.portfolioFooterContent}>
                        <div className={classes.socialBlock}>
                            <h2>Email</h2>
                            <a href='mailto:oskar.michalik06@gmail.com'>oskar.michalik06@gmail.com</a>
                        </div>
                        <div className={classes.socialBlock}>
                            <h2>Github</h2>
                            <a href='https://github.com/OskarMichalik'>https://github.com/OskarMichalik</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div >
}

export default Portfolio;