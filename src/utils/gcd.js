const gcd = (a, b) => {
  let absA = Math.abs(a);
  let absB = Math.abs(b);
  while (absB !== 0) {
    const tmp = absB;
    absB = absA % absB;
    absA = tmp;
  }

  return absA;
};

export default gcd;
