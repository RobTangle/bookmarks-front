import axios from "axios";
import { useState } from "react";
import { NAME_ACCESS_TOKEN } from "../../helpers/constants";

export function NewResource({ isLoggedIn }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });
  const URL_SERVER = "http://localhost:3333";

  async function postWithAxios(form) {
    try {
      const accessToken = localStorage.getItem(NAME_ACCESS_TOKEN);
      const response = await axios.post(URL_SERVER + "/bookmarks", form, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.status === 201) {
        return alert("Recurso creado exitosamente.");
      } else {
        console.log(response);
        alert(response.data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await postWithAxios(form);
  }

  function handleOnChange(e) {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      {isLoggedIn === true && (
        <div>
          <hr />
          <h2>Save new resource</h2>
          <fieldset>
            <form action="" onSubmit={handleSubmit} className="form">
              <label htmlFor="title">Title</label>
              <input type="text" id="title" onChange={handleOnChange} />
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                onChange={handleOnChange}
              ></textarea>
              <label htmlFor="link">Link</label>
              <input type="text" id="link" onChange={handleOnChange} />
              <button>Save</button>
            </form>
          </fieldset>
        </div>
      )}
    </>
  );
}
