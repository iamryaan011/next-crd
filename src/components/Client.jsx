//styles
import styles from "../styles/scss/Client.module.scss";

//axios
import Axios from "axios";

export const Client = ({ id, name, email, tel, obs }) => {
  const handleDelete = () => {
    Axios.delete(`http://localhost:3001/delete/${id}`);

    document.location.reload();
  };

  return (
    <section className={styles.Client}>
      <div>
        <article>
          <h1>{name}</h1>

          <div>
            <button id={styles.delete} onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </article>

        <article id={styles.informations}>
          <span>
            <strong>Email:</strong> {email}
          </span>
          <span>
            <strong>Telefone:</strong> {tel}
          </span>
          <span>
            <strong>Profissão:</strong> {obs}
          </span>
        </article>
      </div>
    </section>
  );
};
