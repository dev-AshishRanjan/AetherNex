import React from "react";
import styles from '../styles/Home.module.scss';

const Index = () => {
  return (
    <>
      <div className={styles.error}>
        <h1>404</h1>
        <p>Page Not Found</p>
        {/* <Filteroptions /> */}
      </div>
    </>
  );
};

export default Index;