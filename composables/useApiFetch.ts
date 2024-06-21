export const useApiFetch = (path, options) => {
  let headers = {
    accept: "application/json",
    referer: "http://localhost:3000",
  };
  const xsrfToken = useCookie("XSRF-TOKEN");
  if (xsrfToken.value) {
    headers["X-XSRF-TOKEN"] = xsrfToken.value;
  }
  if (process.server) {
    headers = {
      ...headers,
      ...useRequestHeaders(["cookie", "referer"]),
    };
  }

  return useFetch("http://localhost:8000" + path, {
    credentials: "include",
    watch: false,
    ...options,
    headers: {
      ...headers,
      ...options?.headers,
    },
  });
};
