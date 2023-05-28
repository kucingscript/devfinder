export const getUser = async (user) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${user || `kucingscript`}`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
};
