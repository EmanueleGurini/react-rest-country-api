import style from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.container}>
        <p>
          Make with 67 coffe by Laura, Emerson, Joao, Alejandro and Emanuele
        </p>
      </div>
    </section>
  );
};

export default Footer;
