// Reference: https://www.youtube.com/watch?v=W1R4QkZubx8

export function addBinary(a: string, b: string): string {
  if (a.length < 53 && b.length < 53) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  } else {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
  }
}
