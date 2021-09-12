import styles from "./style.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <button>All</button>
      <button>Today</button>
    </div>
  );
};

export { Header };
