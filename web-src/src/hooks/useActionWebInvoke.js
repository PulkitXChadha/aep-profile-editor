import { useState, useEffect } from "react";
import actionWebInvoke from "../utils";

export const useActionWebInvoke = ({
  actionName,
  headers = {},
  params = {},
  cacheResponse = true,
}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = actionName + JSON.stringify(headers) + JSON.stringify(params);

  useEffect(() => {
    const cachedValue = JSON.parse(sessionStorage.getItem(key));
    console.log(
      `${actionName} ${JSON.stringify(headers)} ${JSON.stringify(params)}`
    );
    if (cachedValue && cacheResponse) {
      setData(cachedValue);
      setIsLoading(false);
    } else {
      actionWebInvoke(
        actionName,
        JSON.stringify(headers),
        JSON.stringify(params)
      )
        .then((response) => {
          console.log(`response = ${JSON.stringify(response)}`);
          setData(response);
          setIsLoading(false);
          sessionStorage.setItem(key, JSON.stringify(response));
        })
        .catch((e) => {
          console.log(`error = ${JSON.stringify(e)}`);
          setData(null);
          setIsLoading(false);
          setError(e);
        });
    }
  }, []);
  return { data, isLoading, error };
};
