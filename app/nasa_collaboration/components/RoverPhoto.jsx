"use client";
import React from "react";
import styles from "../page.module.css";

const RoverPhoto = ({ src, date, roverName }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <img
        src={src}
        alt={`Photo by ${roverName}`}
        className={styles.roverPhotoImg}
      />
      <p>
        <strong>Rover:</strong> {roverName} <br />
        <strong>Date:</strong> {date}
      </p>
    </div>
  );
};

export default RoverPhoto;
