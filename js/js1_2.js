'use strict';

{
  while (true) {
    const name = prompt("日本の首都は？");
    if (name === "東京") {
      alert("正解です！");
      break;
    } else {
      alert("不正解です！");
      continue;
        }
  }
}
