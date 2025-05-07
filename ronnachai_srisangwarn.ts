function getMinMove(start: string, target: string): number {
  let ans = 0;

  // let xarr = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };

  let startx = start[0];
  let starty = start[1];
  let targetx = target[0];
  let targety = target[1];

  let x = Math.abs(startx.charCodeAt(0) - targetx.charCodeAt(0));
  let y = Math.abs(starty.charCodeAt(0) - targety.charCodeAt(0));
  if (x < y) {
    const temp = x;
    x = y;
    y = temp;
  }
  console.log(x, y);

  const a = [
    [0],
    [3, 4],
    [2, 1, 4],
    [3, 2, 3, 2],
    [2, 3, 2, 3, 4],
    [3, 4, 3, 4, 3, 4],
    [4, 3, 4, 3, 4, 5, 4],
    [5, 4, 5, 4, 5, 4, 5, 6],
  ];
  // ans = targetx;
  // console.log(targetx);
  // console.log(a[x][y]);
  ans = a[x][y];
  console.log(ans);
  return ans;
}

getMinMove("d4", "b2");
