import classes from "./ProjectImage.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const ProjectImage: React.FC<{
  imageArray: string[];
  handleChangeImageDialog: (array: string[], index: number) => void;
}> = (props) => {
  const variants = {
    hover: { scale: 1.2 },
    tap: { scale: 1 },
  };
  const [showedImage, setShowedImage] = useState<number>(0);
  function changeImage(value: number) {
    let imageIndex = showedImage + value;
    if (imageIndex === props.imageArray.length) imageIndex = 0;
    else if (imageIndex === -1) imageIndex = props.imageArray.length - 1;

    setShowedImage(imageIndex);
  }
  function selectImage(value: number) {
    setShowedImage(value);
  }

  return (
    <motion.div className={classes.projectImage}>
      <div className={classes.imageDiv}>
        <motion.div
          className={classes.leftArrow}
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
              src={props.imageArray[showedImage]}
              alt="project"
              key={showedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.05 } }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() =>
                props.handleChangeImageDialog(props.imageArray, showedImage)
              }
            />
          </AnimatePresence>
        </div>
        <motion.div
          className={classes.rightArrow}
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
          onClick={() => selectImage(0)}
          animate={{ fill: showedImage === 0 ? "#000" : "#bebebe" }}
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
          onClick={() => selectImage(1)}
          animate={{ fill: showedImage === 1 ? "#000" : "#bebebe" }}
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
          onClick={() => selectImage(2)}
          animate={{ fill: showedImage === 2 ? "#000" : "#bebebe" }}
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
    </motion.div>
  );
};

export default ProjectImage;
