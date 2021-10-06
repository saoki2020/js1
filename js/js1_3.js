'use strict';
{
  let task_list = ["掃除", "買い物", "散歩"];

  function show_task() {
  console.log("========================");
  console.log("現在持っているタスク一覧");
  console.log("========================");

  task_list.forEach(function(value, index) {
    console.log(`${index} : ${value}`);
  });
}

  show_task();
  const input_task = prompt("タスクを入力してください");

  if (input_task) {
    alert("新しいタスクを追加しました。");
    task_list.push(input_task);
    show_task();
  }
  
  prompt("「確認,追加,削除,終了」の4つのいずれかを入力してください");
}
