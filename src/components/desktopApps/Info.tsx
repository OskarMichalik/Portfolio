import classes from './Info.module.css';
import { locationInterface } from '../../interfaces';
import { AnimatePresence, motion } from 'framer-motion';
import TopBar from './TopBar';
import { useRef, useState } from 'react';

const Info: React.FC<{ location: locationInterface, setLocation: React.Dispatch<React.SetStateAction<locationInterface>>, setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>, openedApps: locationInterface[] }> = (props) => {
    const me = require("../../assets/Me.JPG");
    const closeIcon = require("../../assets/closeIcon.png");
    const mySpaceIcon = require("../../assets/mySpaceIcon.gif");
    const gitIcon = require("../../assets/gitIcon.png");
    const linkedInIcon = require("../../assets/linkedInIcon.png");
    const emailIcon = require("../../assets/emailIcon.png");
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [achievementsOpen, setAchievementsOpen] = useState<boolean>(false);
    const [skillsOpen, setSkillsOpen] = useState<boolean>(false);
    const pageRef = useRef<HTMLDivElement | null>(null)


    let currentLocation: boolean = true;
    if(props.location !== "info"){
        setTimeout(()=>{
            currentLocation = false;
        },500)
    }
    const handleSkillsFn = () => {
        if (pageRef.current && skillsOpen) {
            pageRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            setTimeout(() => {
                setSkillsOpen(prev => !prev);
            }, 200)
        }
        else if (pageRef.current) {
            setSkillsOpen(prev => !prev);
            setTimeout(() => {
                if (pageRef.current) {
                    pageRef.current.scrollTo({
                        top: pageRef.current.scrollHeight,
                        behavior: "smooth",
                    })
                }
            }, 200)
        }
    }

    return <motion.div
        className={classes.infoDiv}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: props.location === "info" ? 1 : 0.5, opacity: props.location === "info" ? 1 : 0 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ duration: 0.2, bounce: 0 }}
        style={{ zIndex: currentLocation ? 10 : 0 }}
    >
        <TopBar location={"info"} setLocation={props.setLocation} setOpenedApps={props.setOpenedApps} openedApps={props.openedApps} />
        <motion.div className={classes.infoContentDiv} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.2 }} ref={pageRef}>
            <AnimatePresence>
                {
                    openDialog && <div className={classes.modalDiv}>
                        <motion.div className={classes.backdrop} onClick={() => setOpenDialog(false)} initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }} />
                        <motion.dialog
                            open
                            className={classes.modal}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: 0.1,
                            }}
                        >
                            <div className={classes.modalButtons}>
                                <img src={closeIcon} alt='close icon' onClick={() => setOpenDialog(false)} className={classes.toolsIcons} />
                            </div>
                            <div className={classes.modalContent}>
                                <h2>Find me at</h2>
                                <div className={classes.socialDiv}><a href='https://github.com/OskarMichalik'><img src={gitIcon} alt='Git Icon' /><p>GitHub</p></a></div>
                                <div className={classes.socialDiv}><a href='https://www.linkedin.com/in/oskar-michalik-552548311/'><img src={linkedInIcon} alt='LinkedIn Icon' /><p>LinkedIn</p></a></div>
                                <div className={classes.socialDiv}><a href='mailto:oskar.michalik06@gmail.com'><img src={emailIcon} alt='Email Icon' /><p>Email</p></a></div>
                            </div>
                        </motion.dialog>
                    </div>
                }
            </AnimatePresence>
            <div className={classes.content}>
                <div className={classes.mainInfo}>
                    <div className={classes.leftMainContent}>
                        <h1>Oskar Michalik</h1>
                        <img src={me} alt='That is me :)' />
                    </div>
                    <div className={classes.rightMainContent}>
                        <h4>"Future Expert Programmer"</h4>
                        <p>Poland, Kraków</p>
                        <p>My hobbies:</p>
                        <ul>
                            <li>Fantasy Books</li>
                            <li>Comedy Movies</li>
                            <li>Action Games</li>
                            <li>Studying English</li>
                        </ul>
                        <img src={mySpaceIcon} alt='I am online' onClick={() => setOpenDialog(true)} />
                    </div>
                </div>
                <div className={classes.achievementsDiv}>
                    <div className={classes.articleHeader} onClick={() => setAchievementsOpen(prev => !prev)}>
                        <h2>My achievements</h2>

                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" animate={{ rotate: achievementsOpen ? 270 : 90 }}>
                            <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                        </motion.svg>
                    </div>
                    <AnimatePresence>
                        {
                            achievementsOpen &&
                            <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                key="achievements"
                            >
                                <li>3rd place - SandCodes 6/2024</li>
                            </motion.ul>
                        }
                    </AnimatePresence>
                </div>
                <div className={classes.skillsDiv}>
                    <div className={classes.articleHeader} onClick={() => handleSkillsFn()}>
                        <h2>My skills</h2>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555" animate={{ rotate: skillsOpen ? 270 : 90 }}>
                            <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                        </motion.svg>
                    </div>
                    <AnimatePresence>
                        {skillsOpen && <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            key="skills"
                        >
                            <h4>Proficiency in</h4>
                            <ul>
                                <li>Javascript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Next.js</li>
                                <li>CSS</li>
                                <li>Tailwind</li>
                                <li>React on Blockchain</li>
                                <li>Git version control</li>
                                <li>Php</li>
                                <li>MySQL</li>
                            </ul>
                            <h4>Experience with</h4>
                            <ul>
                                <li>Windows</li>
                                <li>Windows Server</li>
                                <li>Linux</li>
                                <li>Linux Server</li>
                            </ul>
                            <h4>Languages</h4>
                            <ul>
                                <li>Polish - Native</li>
                                <li>English - C1</li>
                            </ul>
                        </motion.div>}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    </motion.div>
}

export default Info;