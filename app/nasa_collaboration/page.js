"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import RoverPhoto from "./components/RoverPhoto";

// Read "/app/nasa_collaboration/README.md" for more info about the API_KEY
// You need a proper API_KEY for the requests to work
const API_KEY = "UL0yii13kt5FWc5tj3LlaVQnUH87BBq8t6048D6o";

const NASA_URLs = {
  astronomyPicOfTheDay: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,
  marsRoverPhoto: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=${API_KEY}`,
};

export const NasaCollaboration = () => {
  const [dailyImg, setDailyImg] = useState({});
  const [roverPhoto, setRoverPhoto] = useState({});

  useEffect(() => {
    const fetchRoverPhotos = async () => {
      const roverPhotoResponse = await fetch(NASA_URLs.marsRoverPhoto).then(
        (response) => response.json()
      );
      setRoverPhoto(roverPhotoResponse);
    };
    const fetchAstronomyPicOfTheDay = async () => {
      const dailyImgResponse = await fetch(NASA_URLs.astronomyPicOfTheDay).then(
        (response) => response.json()
      );
      setDailyImg(dailyImgResponse);
    };
    fetchRoverPhotos();
    fetchAstronomyPicOfTheDay();
  }, []);

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Collaboration with NASA</h1>
        <section className="card">
          <h2>Astronomy Picture of the day</h2>
          <div className={styles.nasaPicOfTheDay}>
            <h3>{dailyImg.title}</h3>
            <div className={styles.nasaPicOfTheDayContainer}>
              <div>
                <p>{dailyImg.explanation}</p>
              </div>
              <div>
                <img
                  className={styles.nasaPicOfTheDayImg}
                  src={dailyImg.url}
                  alt={dailyImg.title}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <h2>Rover Photos</h2>

          {/* TIPS: */}
          {/* If you don't know how the data looks like you can: */}
          {/* 1. use console.log() to write the data to the console */}
          {/* 2. use the network tab in the developer tab - https://developer.chrome.com/docs/devtools/network */}

          {roverPhoto?.photos?.length ? (
            <div className={styles.roverPhotosContainer}>
              {roverPhoto.photos.map((photo) => (
                <RoverPhoto
                  key={photo.id}
                  src={photo.img_src}
                  date={photo.earth_date}
                  roverName={photo.rover.name}
                />
              ))}
            </div>
          ) : (
            <p>Loading rover photos...</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default NasaCollaboration;
