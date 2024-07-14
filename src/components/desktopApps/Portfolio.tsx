import classes from "./Portfolio.module.css";
import TopBar from "./TopBar";
import { motion, AnimatePresence } from "framer-motion";
import { locationInterface } from "../../interfaces";
import ProjectGallery from "./ProjectGallery";
import { useEffect, useRef, useState } from "react";

const Portfolio: React.FC<{
  setLocation: React.Dispatch<React.SetStateAction<locationInterface>>;
  location: locationInterface;
  setOpenedApps: React.Dispatch<React.SetStateAction<locationInterface[]>>;
  openedApps: locationInterface[];
}> = (props) => {
  const [openDialog, setOpenDialog] = useState<string[] | null>(null);
  const [openDialogIndex, setOpenDialogIndex] = useState<number>(0);
  const pageRef = useRef<HTMLDivElement | null>(null);

  let currentLocation: boolean = true;

  if (props.location !== "portfolio") {
    setTimeout(() => {
      currentLocation = false;
    }, 500);
  }

  const closeIcon = require("../../assets/closeIcon.png");

  useEffect(() => {
    setOpenDialog(null);
  }, [props.location]);

  const variants = {
    hover: { scale: 1.2 },
    tap: { scale: 1 },
  };

  function handleChangeImageDialog(array: string[], index: number) {
    setOpenDialog(array);
    setOpenDialogIndex(index);
  }

  function changeImage(value: number) {
    if (openDialog === null) return;

    let imageIndex = openDialogIndex + value;
    if (imageIndex === openDialog.length) imageIndex = 0;
    else if (imageIndex === -1) imageIndex = openDialog.length - 1;

    setOpenDialogIndex(imageIndex);
  }

  const searchTickets = [
    require("../../assets/search-tickets1.png"),
    require("../../assets/search-tickets2.png"),
    require("../../assets/search-tickets3.png"),
  ];
  const alienInvasion = [
    require("../../assets/alien1.png"),
    require("../../assets/alien2.png"),
    require("../../assets/alien3.png"),
  ];
  const blockchainGame = [
    require("../../assets/game1.png"),
    require("../../assets/game2.png"),
    require("../../assets/game3.png"),
  ];

  return (
    <motion.div
      className={classes.portfolioDiv}
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: props.location === "portfolio" ? 1 : 0,
        opacity: props.location === "portfolio" ? 1 : 0,
      }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        scale: { duration: 0.2, bounce: 0 },
        opacity: { duration: 0.1 },
      }}
      style={{ zIndex: currentLocation ? 10 : 0 }}
    >
      <TopBar
        location={"portfolio"}
        setLocation={props.setLocation}
        setOpenedApps={props.setOpenedApps}
        openedApps={props.openedApps}
      />
      <motion.div
        className={classes.portfolioContentDiv}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        ref={pageRef}
      >
        <AnimatePresence>
          {openDialog && (
            <div className={classes.modalDiv}>
              <motion.div
                className={classes.backdrop}
                onClick={() => setOpenDialog(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  height:
                    pageRef.current !== null ? pageRef.current.scrollHeight : 0,
                }}
              />
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
                  <motion.img
                    src={closeIcon}
                    alt="close icon"
                    onClick={() => setOpenDialog(null)}
                    className={classes.toolsIcons}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1 }}
                  />
                </div>
                <div className={classes.dialogContent}>
                  <motion.div
                    className={classes.modalLeftArrow}
                    onClick={() => changeImage(-1)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.605"
                      height="15.555"
                      variants={variants}
                    >
                      <path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z" />
                    </motion.svg>
                  </motion.div>
                  <div className={classes.imageContainer}>
                    <AnimatePresence>
                      <motion.img
                        src={openDialog[openDialogIndex]}
                        alt="project"
                        key={openDialog[openDialogIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.05 } }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      />
                    </AnimatePresence>
                  </div>
                  <motion.div
                    className={classes.modalRightArrow}
                    onClick={() => changeImage(1)}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <motion.svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10.605"
                      height="15.555"
                      variants={variants}
                    >
                      <path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z" />
                    </motion.svg>
                  </motion.div>
                </div>
                <div className={classes.dotsDiv}>
                  <motion.svg
                    onClick={() => setOpenDialogIndex(0)}
                    animate={{
                      fill: openDialogIndex === 0 ? "#000" : "#bebebe",
                    }}
                    whileHover={{ fill: "#000", transition: { duration: 0.1 } }}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 25.334 25.334"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"></path>{" "}
                      </g>{" "}
                    </g>
                  </motion.svg>
                  <motion.svg
                    onClick={() => setOpenDialogIndex(1)}
                    animate={{
                      fill: openDialogIndex === 1 ? "#000" : "#bebebe",
                    }}
                    whileHover={{ fill: "#000", transition: { duration: 0.1 } }}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 25.334 25.334"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"></path>{" "}
                      </g>{" "}
                    </g>
                  </motion.svg>
                  <motion.svg
                    onClick={() => setOpenDialogIndex(2)}
                    animate={{
                      fill: openDialogIndex === 2 ? "#000" : "#bebebe",
                    }}
                    whileHover={{ fill: "#000", transition: { duration: 0.1 } }}
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 25.334 25.334"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path d="M25.334,12.667c0,6.996-5.672,12.667-12.668,12.667C5.672,25.334,0,19.663,0,12.667S5.672,0,12.666,0 C19.662,0,25.334,5.671,25.334,12.667z"></path>{" "}
                      </g>{" "}
                    </g>
                  </motion.svg>
                </div>
              </motion.dialog>
            </div>
          )}
        </AnimatePresence>
        <div className={classes.content}>
          <div className={classes.main}>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Website Developer
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Oskar Michalik
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              &lt;/&gt;
            </motion.p>
          </div>
          <div className={classes.showProjects}>
            <h1>My Projects</h1>
            <div className={classes.listProjects}>
              <div className={classes.projectBlock}>
                <h2>Next.js</h2>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://search-flights-project.web.app/"
                >
                  &gt; Searching Flights (Website)
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/OskarMichalik/Travel-From-Project"
                >
                  &gt; Searching Flights (Github)
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/OskarMichalik/Clothing-Shop-Project"
                >
                  &gt; Clothing Shop (Github)
                </motion.a>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/OskarMichalik/Alien-Invasion-Hackathon"
                >
                  &gt; Alien Invasion for SandCodes Hackathon (Github)
                </motion.a>
              </div>
              <div className={classes.projectBlock}>
                <h2>Blockchain React</h2>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/OskarMichalik/blockchain-project"
                >
                  &gt; Game (Github)
                </motion.a>
              </div>
              <div className={classes.projectBlock}>
                <h2>React + TypeScript</h2>
                <motion.a
                  whileHover={{ x: 10 }}
                  href="https://github.com/OskarMichalik/Portfolio"
                >
                  &gt; This Portfolio :) (Github)
                </motion.a>
              </div>
            </div>
          </div>
          <ProjectGallery
            searchTickets={searchTickets}
            alienInvasion={alienInvasion}
            blockchainGame={blockchainGame}
            handleChangeImageDialog={handleChangeImageDialog}
          />
          <div className={classes.portfolioFooter}>
            <hr />
            <div className={classes.portfolioFooterContent}>
              <div className={classes.socialBlock}>
                <h2>Email</h2>
                <a href="mailto:oskar.michalik06@gmail.com">
                  oskar.michalik06@gmail.com
                </a>
              </div>
              <div className={classes.socialBlock}>
                <h2>Github</h2>
                <a href="https://github.com/OskarMichalik">
                  https://github.com/OskarMichalik
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
