// export const capitaliseString = str => str.toUpperCase();

const capitaliseString = (str) => {
  try {
    return str.toUpperCase();
  } catch (e) {
    console.log(e);
  }
};

const a=5;

module.exports = { capitaliseString, a};
