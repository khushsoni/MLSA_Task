/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/desk.jpg";

const imageAltText = "desk with and laptop and chair";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Gym Business website 🎉",
    description:
      "Responsive website for a gym business. It is a static website with HTML, CSS and JavaScript. It is a responsive website with a hamburger menu for mobile devices.",
    url: "https://khushsoni.github.io/megym.github.io/",
  },
  {
    title: "Person Detection",
    description:
      "One of the most promising applications of computer vision is person detection, which involves identifying and locating individuals in images or videos.",
    url: "https://github.com/khushsoni/CSE-541-Computer-Vision-2023-Visionaries_4.0",
  },
  {
    title: "My Resume Site",
    description:
      "My resume in one page",
    url: "https://bento.me/khushs",
  },
  {
    title: "LinkedIn Profile",
    description:
      "Let's connect professionally on LinkedIn.",
    url: "https://www.linkedin.com/in/khush-soni-145463202/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
