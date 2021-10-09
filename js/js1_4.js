'use strict';
{
  const tasks = [
    {matter: "机を片づける", genre: "掃除"},
    {matter: "牛乳を買う", genre: "買い物"},
    {matter: "散歩する", genre: "運動"},
  ];

  const show_task = () => {
  console.log("========================");
  console.log("現在持っているタスク一覧");
  console.log("========================");
  tasks.forEach(task => {
    const key = Object.keys(task);
    console.log(`[内容]：${task.matter}、[ジャンル]：${task.genre}`);
    });
  }

  show_task();

  while (true) {
    const input_task = prompt("タスクを入力してください");
    const input_genre = prompt("ジャンルを入力してください");
    if (input_task && input_genre) {
      tasks.push({matter: input_task, genre: input_genre});
      alert("新しいタスクを追加しました。");
      show_task();
      break;
    } else {
      continue;
    }
  }
  prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
}
