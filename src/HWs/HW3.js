export default function(n) {
  let k = n[0];
  for (let i = 1; i < n.length - 1; i++) {
    if (n[i] > k) {
      k = n[i];
    } else {
      continue;
    }
  }
  return k;
}
