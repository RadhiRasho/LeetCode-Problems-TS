export function mySqrt(x: number): number {
  if (x <= 1) return x;

  let sqrt = 0;
  for (let i = 0; x >= sqrt; ++i) {
    sqrt = i * i;
  }
  return sqrt;
}
