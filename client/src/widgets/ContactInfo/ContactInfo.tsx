import React from "react";
import { Button } from "antd";
import styles from "./ContactInfo.module.scss";

export const ContactInfo = () => {
  return (
    <>
      <div className={styles.phone__number}>
        <p className={styles.phone__number_text}>+7 (495) 123-45-67</p>
        <p className={styles.phone__mail}>info@example.com</p>
      </div>
      <div className={styles.phone__button}>
        <Button>Заказать звонок</Button>
      </div>
    </>
  );
};
