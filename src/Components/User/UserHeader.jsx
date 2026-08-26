import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const location = useLocation();
  const { pathname } = location;

  const titles = {
    "/conta/postar": "Poste Sua Foto",
    "/conta/estatisticas": "Estatísticas",
  };

  const title = titles[pathname] ?? "Minha Conta";

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
