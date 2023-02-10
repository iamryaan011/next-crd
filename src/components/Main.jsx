//styles
import styles from "../styles/scss/Main.module.scss";

//component
import { Client } from "./Client";

//react
import { useState, useEffect } from "react";

//axios
import Axios from "axios";

export const Main = () => {
  const [values, setValues] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/get")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,

      [value.target.name]: [value.target.value],
    }));
  };

  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {
      id: values.id,
      name: values.name,
      email: values.email,
      tel: values.tel,
      obs: values.obs,
    }).then(() => {
      setUsers([
        ...users,

        {
          id: values.id,
          name: values.name,
          email: values.email,
          tel: values.tel,
          obs: values.obs,
        },
      ]);
    });
  };

  return (
    <main className={styles.Main}>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          onChange={handleChangeValues}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="E-mail"
          onChange={handleChangeValues}
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Telefone"
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="obs"
          id="obs"
          placeholder="Profissão"
          onChange={handleChangeValues}
        />

        <button type="button" onClick={() => handleClickButton()}>
          Salvar
        </button>
      </form>

      <aside>
        <h1>Usuários</h1>

        <div style={{ overflow: "auto", height: "220px", padding: "0 0.5rem" }}>
          {typeof users !== "undefined" &&
            users.map((value, key) => {
              return (
                <Client
                  key={key}
                  name={value.name}
                  email={value.email}
                  tel={value.tel}
                  obs={value.obs}
                  id={value.id}
                />
              );
            })}
        </div>
      </aside>
    </main>
  );
};
