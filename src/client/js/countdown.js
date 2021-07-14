// function to determine the amount of days prior to trip

const d = new Date();

const countdown = (checkDate) => Math.round((checkDate - d.getTime()) / (1000 * 60 * 60 * 24) + 1);

// eslint-disable-next-line import/prefer-default-export
export { countdown };
