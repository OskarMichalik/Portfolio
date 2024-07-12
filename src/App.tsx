import { useState } from 'react';
import classes from './App.module.css';
import ShowIconsOnDesktop from './components/ShowIconsOnDesktop';
import ShowApps from './components/ShowApps';
import MenuBar from './components/MenuBar';
import { locationInterface } from './interfaces';

function App() {
  const wallpaper = require("./assets/wallpaper.png");
  const [location, setLocation] = useState<locationInterface>("desktop");
  const [openedApps, setOpenedApps] = useState<locationInterface[]>([]);
  console.log(openedApps);

  return (
    <div className={classes.screen}>
      <div className={classes.appDiv}>
        <div className={classes.desktopDiv} style={{ zIndex: location === "desktop" ? 10 : 0 }}>
          <img src={wallpaper} alt='wallpaper' />
          <ShowIconsOnDesktop setLocation={setLocation} setOpenedApps={setOpenedApps} openedApps={openedApps} />
        </div>
        <ShowApps location={location} setLocation={setLocation} setOpenedApps={setOpenedApps} openedApps={openedApps} />
      </div>
      <MenuBar location={location} setLocation={setLocation} openedApps={openedApps} />
    </div>
  );
}

export default App;
