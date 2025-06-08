import classes from "./Contacts.module.css";
import facebook_img from "../../assets/facebook_icon-removebg-preview.png";
import gmail_img from "../../assets/gmail_icon-removebg-preview.png";
import github_img from "../../assets/icons8-github-squared-200-removebg-preview.png";
import instagram_img from "../../assets/instagram_icon-removebg-preview.png";

export default function ContactsSection() {
  return (
    <section id="contacts" className={classes.contacts_section}>
      <h2 className={classes.contacts_title}>Contacts</h2>
      <div className={classes.img_flex_container}>
        <a href="https://www.facebook.com/velislav.shopov.10">
          <img
            src={facebook_img}
            className={classes.contact_img}
            alt="Facebook"
          ></img>
        </a>
        <a href="mailto:shopov.velislav@gmail.com">
          <img src={gmail_img} className={classes.contact_img} alt="Mail"></img>
        </a>
        <a href="https://www.instagram.com/v_shopov20/">
          <img
            src={instagram_img}
            className={classes.contact_img}
            alt="Instagram"
          ></img>
        </a>
        <a href="https://github.com/VelislavShopov">
          <img
            src={github_img}
            className={classes.contact_img}
            alt="github"
          ></img>
        </a>
      </div>
    </section>
  );
}
