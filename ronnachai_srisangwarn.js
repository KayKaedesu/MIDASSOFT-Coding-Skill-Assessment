function getMinMove(start, target) {
    var ans = 0;
    // let xarr = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 };
    var startx = start[0];
    var starty = start[1];
    var targetx = target[0];
    var targety = target[1];
    var x = Math.abs(startx.charCodeAt(0) - targetx.charCodeAt(0));
    var y = Math.abs(starty.charCodeAt(0) - targety.charCodeAt(0));
    if (x < y) {
        var temp = x;
        x = y;
        y = temp;
    }
    console.log(x, y);
    var a = [
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
    console.log(a[x][y]);
    return ans;
}
getMinMove("a1", "h8");
