module.exports = {
  inString: thing => {
    if (thing) return 'truthy';
    else return 'falsy';
  },
  inBoolean: thing => {
    if (thing) return true;
    else return false;
  },
};
