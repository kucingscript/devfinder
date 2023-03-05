export const getUser = async (user) => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${user || `rasyidzkun`}`
    );
    const result = await response.json();

    return result;
  } catch (error) {
    return error;
  }
};
