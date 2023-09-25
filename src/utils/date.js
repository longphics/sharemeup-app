export const dateToString = (str) => {
  date = new Date(str);
  return date.toLocaleDateString('vi');
};
