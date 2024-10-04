import Header from "./Header.jsx";
import classes from "../Layout/index.module.css";

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className={classes.children}>{children}</div>
    </div>
  );
}

export default Layout;
