import { useState } from "react";
import { useDispatch } from "react-redux";
import { createResource } from "../../redux/features/resource";

export function NewResource({ isLoggedIn }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
    category: "",
    keywords: "", // antes de enviar el post, hacer un split(" ")
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const formParsed = {
      ...form,
      keywords: form.keywords.toLowerCase().split(" "),
    };
    dispatch(createResource(formParsed, setForm));
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
              <label htmlFor="category">Category</label>
              <input type="text" id="category" onChange={handleOnChange} />
              <label htmlFor="keywords">Keywords</label>
              <input type="text" id="keywords" onChange={handleOnChange} />
              <button>Save</button>
            </form>
          </fieldset>
        </div>
      )}
    </>
  );
}
