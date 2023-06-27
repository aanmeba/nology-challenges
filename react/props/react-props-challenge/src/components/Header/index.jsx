import s from "./Header.module.scss";

const Header = () => {
  return (
    <section className={s.container}>
      <h1 className={s.title}>My Favourite Albums</h1>
    </section>
  );
};

export default Header;
