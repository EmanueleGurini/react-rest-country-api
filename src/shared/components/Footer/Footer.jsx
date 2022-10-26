import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.container}>
        <p>
          Made with 63 Coffee by Laura, Emerson, João, Alejandro and Emanuele
        </p>
      </div>
    </section>
  );
};

export default Footer;
