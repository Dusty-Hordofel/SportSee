const BASE_URL = import.meta.env.API_BASE_URL;

if (!BASE_URL) {
  throw new Error(
    ".env is missing the definition for API_BASE_URL environment variable"
  );
}

export { BASE_URL };
