import classes from "./ProjectGallery.module.css";
import ProjectImage from "./ProjectImage";

const ProjectGallery: React.FC<{
  searchTickets: string[];
  alienInvasion: string[];
  blockchainGame: string[];
  handleChangeImageDialog: (array: string[], index: number) => void;
}> = (props) => {
  return (
    <div className={classes.projectGallery}>
      <h1>Project Gallery</h1>
      <div className={classes.projectShowcaseLeft}>
        <ProjectImage
          imageArray={props.searchTickets}
          handleChangeImageDialog={props.handleChangeImageDialog}
        />
        <div className={classes.projectDescription}>
          <h2>Find The Best Tickets</h2>
          <p>
            This is my first more complicated project. It allows the user to
            choose their desired departure and arrival cities along with the
            dates. After submitting the necessary information, it takes you to a
            second page where you will find a map with the flight routes and
            listed tickets, which you can sort according to your preferences.
          </p>
          <p className={classes.listHeader}>Used tools:</p>
          <ul>
            <li>Next.js</li>
            <li>Firebase</li>
            <li>Framer-motion</li>
            <li>Google map API</li>
            <li>React Redux</li>
          </ul>
        </div>
      </div>
      <div className={classes.projectShowcaseRight}>
        <div className={classes.projectDescription}>
          <h2>Prepare For The Invasion</h2>
          <p>
            This project was created for the SandCodes Hackathon. Although I
            joined during the last week, I still managed to secure 3rd place.
            The project required a tips section to help users combat aggressive
            aliens, a map displaying danger and safe zones, and, in my case, a
            small game. Working on this project was incredibly enjoyable, and I
            look forward to participating in more events like this.
          </p>
          <p className={classes.listHeader}>Used tools:</p>
          <ul>
            <li>Next.js</li>
            <li>Framer-motion</li>
            <li>Google map API</li>
            <li>React Redux</li>
          </ul>
        </div>
        <ProjectImage
          imageArray={props.alienInvasion}
          handleChangeImageDialog={props.handleChangeImageDialog}
        />
      </div>
      <div className={classes.projectShowcaseLeft}>
        <ProjectImage
          imageArray={props.blockchainGame}
          handleChangeImageDialog={props.handleChangeImageDialog}
        />
        <div className={classes.projectDescription}>
          <h2>Prepare Yourself For An Adventure</h2>
          <p>
            This is my first project made on a blockchain. The game allows the
            users to create an account and embark on an epic adventure, fight
            dangerous monsters and discover new treasures.
          </p>
          <p className={classes.listHeader}>Used tools:</p>
          <ul>
            <li>React</li>
            <li>Rust</li>
            <li>Blockchain</li>
            <li>Framer-motion</li>
            <li>React Redux</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
