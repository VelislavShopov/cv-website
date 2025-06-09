import classes from "./AboutSection.module.css";
import py_img from "../../assets/Python.svg";
import csharp_img from "../../assets/Logo_C_sharp.svg";
import react_img from "../../assets/React-icon.svg";
import django_img from "../../assets/django.svg";
import postgres_img from "../../assets/postgresql.svg";
import fb_img from "../../assets/IMG_0910.JPEG";
import SlideInWrapper from "../SlideInWrapper";

export default function AboutSection() {
  return (
    <section id="about" className={classes.about_section}>
      <h2 className={classes.secondary_title}>About me</h2>
      <SlideInWrapper>
        <div className={classes.text_imgs_container}>
          <p className={classes.about_text}>
            As a dedicated Software Engineering student, I'm deeply immersed in
            the world of technology, constantly honing my skills across a
            diverse range of platforms and languages. I have solid foundation
            both in Python and C#.
          </p>
          <div className={classes.lang_img_container}>
            <img src={py_img} className={classes.lang_img} alt="Py"></img>
            <img
              src={csharp_img}
              className={classes.lang_img}
              alt="Csharp"
            ></img>
          </div>
        </div>
      </SlideInWrapper>
      <SlideInWrapper right>
        <div className={classes.text_imgs_container_right}>
          <div className={classes.lang_img_container_grid}>
            <img src={react_img} className={classes.lang_img} alt="React"></img>
            <img
              src={django_img}
              className={classes.lang_img}
              alt="django"
            ></img>
            <img
              src={postgres_img}
              className={classes.lang_img}
              alt="Postgres"
            ></img>
          </div>
          <p className={classes.about_text}>
            I have strong understanding of React, Django, PostgreSQL and RESTful
            API design which allow me to create robust, scalable, and dynamic
            full-stack web applications.
          </p>
        </div>
      </SlideInWrapper>
      <SlideInWrapper>
        <div className={classes.text_imgs_container}>
          <p className={classes.about_text_smaller}>
            Outside of my studies, I've spent 12 years training in football, an
            experience that has profoundly shaped my approach to challenges.
            <br></br> The discipline, resilience, and collaborative spirit
            demanded by the sport are principles I apply to my engineering
            projects. This background has taught me the importance of clear
            communication and working effectively within a team.
          </p>
          <div className={classes.lang_img_container}>
            <img src={fb_img} className={classes.fb_img} alt="Fb"></img>
          </div>
        </div>
      </SlideInWrapper>
    </section>
  );
}
