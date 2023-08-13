import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { useEffect, useState } from "react";

interface ExtendedNavigator extends Navigator {
  connection?: Connection;
}
interface Connection {
  downlink?: number;
}

const Home: NextPage = () => {
  const [navigatorSpeed, setNavigatorSpeed] = useState<string>("0");
  const [imageSpeed, setImageSpeed] = useState<string>("");
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const imageAddr =
    "https://upload.wikimedia.org/wikipedia/commons/3/3a/Bloemen_van_adderwortel_%28Persicaria_bistorta%2C_synoniem%2C_Polygonum_bistorta%29_06-06-2021._%28d.j.b%29.jpg";
  const downloadSize = 7300000; // bytes

  const ShowProgressMessage = (msg: string) => {
    console.log(msg); // Use console.log for development purposes
  };

  const MeasureConnectionSpeed = () => {
    setImgLoaded(false);
    let startTime: number, endTime: number;
    const download = new Image();
    const interval = setInterval(() => {
      endTime = new Date().getTime();
      showResults();
    }, 400);
    download.onload = () => {
      clearInterval(interval);
      endTime = new Date().getTime();
      showResults();
      setImgLoaded(true);
    };

    download.onerror = (err, msg) => {
      ShowProgressMessage("Network Error");
    };

    startTime = new Date().getTime();
    const cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;

    const showResults = () => {
      const duration = (endTime - startTime) / 1000;
      const bitsLoaded = downloadSize * 8;
      const speedBps: string | any = (bitsLoaded / duration).toFixed(2);
      const speedKbps: string | any = (speedBps / 1024).toFixed(2);
      const speedMbps: string | any = (speedKbps / 1024).toFixed(2);
      setImageSpeed(speedMbps + " Mbps"); // Set the image download speed
    };
  };

  useEffect(() => {
    ShowProgressMessage("Starting");
    setImgLoaded(false);
    MeasureConnectionSpeed();

    // Use navigator.connection to get estimated internet speed
    const connection: Connection | any = (navigator as ExtendedNavigator)
      .connection;
    if (connection.downlink) {
      const estimatedSpeed = connection.downlink;
      setNavigatorSpeed(estimatedSpeed.toFixed(2));
    } else {
      setNavigatorSpeed("NS");
    }
  }, []);

  return (
    <main className={styles.bg}>
      <h2 className={styles.logo}>AetherNex</h2>
      <h2 className={styles.sideLogo}>AetherNex</h2>
      <section className={styles.speedSection}>
        {/* <h3>Calculated Speed (Image Download)</h3> */}
        <span
          className={`${styles.speed} && ${
            imgLoaded === true ? styles.loaded : styles.loading
          }`}
          onClick={() => {
            window.location.reload();
          }}
          title="click to refresh"
        >
          {imageSpeed}
        </span>
        <h3>Image Download</h3>
      </section>
      <section className={styles.speedSection}>
        {/* <h3>Estimated Speed (Navigator API)</h3> */}
        <span className={styles.speed}>{navigatorSpeed} Mbps</span>
        <h3>Navigator API</h3>
        <footer className={styles.footer}>
          Made with ❤️ | &copy;{" "}
          <a href="https://ashish-portfolio-ofc.vercel.app/" target="_blank">
            ASHISH
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/dev-AshishRanjan/AetherNex"
            target="_blank"
          >
            Github
          </a>
        </footer>
      </section>
      <span className={styles.designSpeed}>{navigatorSpeed}</span>
    </main>
  );
};

export default Home;
