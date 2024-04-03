export const getUserName = () => {
  return JSON.parse(localStorage?.getItem("user"))?.username;
};
