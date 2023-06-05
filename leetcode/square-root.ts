export function mySqrt(x: number): number {
  if (x <= 1) return x;

  let i = 0;
  let sqrt = i;
  while (sqrt <= x) {
    i++;
    sqrt = i * i;
  }
  return i - 1;
}
