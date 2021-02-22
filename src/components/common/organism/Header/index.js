import { memo } from "react";
import { useHistory } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import "./styles.css";

const Header = memo(function Header() {
  const { push } = useHistory();

  return (
    <div className="container-header">
      <h1 className="title-header" onClick={() => push("/")}>
        E-Commerce
      </h1>

      <ShoppingCartIcon
        style={{ color: "#fff", fontSize: "30px" }}
        onClick={() => push("/shopping-cart")}
      />
    </div>
  );
});

export { Header };
