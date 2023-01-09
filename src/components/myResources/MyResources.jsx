import React, { useState } from "react";
import { Card } from "../card/Card";
import axios from "axios";
import { NAME_ACCESS_TOKEN, URL_SERVER } from "../../helpers/constants";

export function MyResources({ isLoggedIn }) {
  const [resources, setResources] = useState([]);

  React.useEffect(() => {
    console.log("Me acabo de montar My Recources.");
    console.log("Fetcheando recursos del user");
    const accessToken = localStorage.getItem(NAME_ACCESS_TOKEN);
    axios
      .get(URL_SERVER + "/bookmarks", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(function (succ) {
        console.log(succ);
        setResources(succ.data);
        console.log("RESOURCES STATE = ", resources);
      })
      .catch((error) => console.log(error));
  }, []);

  React.useEffect(() => {
    console.log("re render al escuchar cambios en resources");
  }, [resources]);

  function handleRefresh() {
    const accessToken = localStorage.getItem(NAME_ACCESS_TOKEN);
    const response = axios
      .get(URL_SERVER + "/bookmarks", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(function (succ) {
        console.log(succ);
        setResources(succ.data);
        console.log("RESOURCES STATE = ", resources);
      })
      .catch((error) => console.log(error));
  }

  return (
    <>
      {isLoggedIn === true && (
        <div className="my-resources-container">
          <hr />
          {resources?.length === 0 && (
            <h3>
              You don't have any resource saved in the data base. What are you
              waiting for?!
            </h3>
          )}
          {resources.length > 0 && (
            <>
              <h2>My resources </h2>
              <button onClick={handleRefresh}>Refresh</button>
              <div className="flex flex-row flex-wrap">
                {resources.map((resource) => {
                  return <Card resource={resource} key={Math.random()} />;
                })}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
