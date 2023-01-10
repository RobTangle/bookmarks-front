import { setAllResources } from "./resourceSlice";
import Swal from "sweetalert2";
import axios from "axios";
import {
  URL_SERVER,
  NAME_ACCESS_TOKEN,
  header,
} from "../../../helpers/constants";

export function fetchAllResources() {
  return async function (dispatch) {
    try {
      const accessToken = localStorage.getItem(NAME_ACCESS_TOKEN);
      let response = await axios.get(
        URL_SERVER + "/bookmarks",
        header(accessToken)
      );
      if (response.status === 200) {
        return dispatch(setAllResources(response.data));
      }
    } catch (error) {
      Swal.fire({
        title: "Oops! Something went wrong",
        text: error?.response?.data?.message?.[0] || error.message,
        icon: "error",
        showConfirmButton: true,
        showCloseButton: true,
      });
    }
  };
}

export function createResource(form, setForm) {
  return async function (dispatch) {
    try {
      const accessToken = localStorage.getItem(NAME_ACCESS_TOKEN);
      const response = await axios.post(
        URL_SERVER + "/bookmarks",
        form,
        header(accessToken)
      );
      console.log("reponse = ", response);
      if (response.status === 201) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Resource created!",
          showConfirmButton: true,
          timer: 5000,
          timerProgressBar: true,
        });
        setForm({
          title: "",
          description: "",
          link: "",
          category: "",
          keywords: "",
        });
      }
      // Si se crea un recurso nuevo, fetcheo los datos del usuario actualizados para que se re-renderice el componente de suscripciones automáticamente.
      return dispatch(fetchAllResources(accessToken));
    } catch (error) {
      console.log(error);
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops! Something went wrong!",
        text: error?.response?.data?.message?.[0] || error.message,
        showConfirmButton: true,
      });
    }
  };
}
