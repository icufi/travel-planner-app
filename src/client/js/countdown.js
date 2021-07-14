const d = new Date();

const countdown = (checkDate) => Math.round((checkDate - d.getTime()) / (1000 * 60 * 60 * 24) + 1);

export { countdown };