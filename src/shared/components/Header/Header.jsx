import style from "./Header.module.css";

const Header = () => {
  return (
    <section className={style.header}>
      <div className={style.container}>
        <h2>Where in the world?</h2>
        <button>Dark Mode</button>
      </div>
    </section>
  );
};

export default Header;
