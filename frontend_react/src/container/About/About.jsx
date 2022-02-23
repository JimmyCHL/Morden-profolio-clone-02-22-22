import React, { useEffect, useState } from "react";
import "./About.scss";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

//Dummy data
// const abouts = [
//   {
//     title: "Web Development",
//     description: "I am a good web developer",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Web Design",
//     description: "I am a good web developer",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Blockchain developer",
//     description: "I am a good web developer",
//     imgUrl: images.about03,
//   },
//   {
//     title: "Backend Developer",
//     description: "I am a good web developer",
//     imgUrl: images.about04,
//   },
// ];

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts" ]`;
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <div id="About" className="app__about app__flex">
      <h2 className="head-text">
        I know that <span>Good Design</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0, 0.5, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "About",
  "app__whitebg"
);
