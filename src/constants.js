export const BASE_URL =
  import.meta.env.VITE_NODE_ENV === "prod"
    ? `${import.meta.env.VITE_NODE_SERVER_HOSTNAME}/api/v1`
    : `${import.meta.env.VITE_NODE_SERVER_LOCAL_HOSTNAME}:${
        import.meta.env.VITE_NODE_SERVER_PORT
      }/api/v1`;
