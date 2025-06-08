import pic from "../../assets/front-picture.JPEG";
import classes from "./HomeSection.module.css";

export default function HomeSection() {
  return (
    <section id="home" className={classes.home_section}>
      <img src={pic} className={classes.img} alt="Profile pic"></img>
      <div className={classes.title_container}>
        <h1 className={classes.intro_p}>Hello, I'm Velislav!</h1>
        <p className={classes.second_title}>Software Engineering Student</p>
      </div>
    </section>
  );
}
