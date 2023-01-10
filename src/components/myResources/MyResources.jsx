import React from "react";
import { Card } from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllResources } from "../../redux/features/resource";

export function MyResources({ isLoggedIn }) {
  const dispatch = useDispatch();
  const resourcesState = useSelector((state) => state.resource.allResources);

  React.useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchAllResources());
    }
  }, []);

  function handleRefresh() {
    dispatch(fetchAllResources());
    console.log("all resources fetched!");
  }

  return (
    <>
      {isLoggedIn === true && (
        <div className="my-resources-container">
          <hr />
          {resourcesState?.length === 0 && (
            <>
              <button onClick={handleRefresh}>Refresh</button>
              <h3>
                You don't have any resource saved in the data base. What are you
                waiting for?!
              </h3>
            </>
          )}
          {resourcesState.length > 0 && (
            <>
              <h2>My resources </h2>
              <button onClick={handleRefresh}>Refresh</button>
              <div className="flex flex-row flex-wrap">
                {resourcesState.map((resource) => {
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
