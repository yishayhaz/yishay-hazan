export const titleize = (str: string) => {
  return str.split(" ").map(capitalize).join(" ");
};

export const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
