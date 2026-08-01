// loading画面制御
window.addEventListener("load", () => {
  const loading = document.getElementById("loading");

  // loading要素がないページでもエラーを出さない
  if (!loading) return;

  // loading中はスクロール禁止
  document.body.classList.add("no-scroll");
  document.documentElement.classList.add("no-scroll");

  // loading画面をフェードアウト
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 2500);

  // スクロール解除
  setTimeout(() => {
    document.body.classList.remove("no-scroll");
    document.documentElement.classList.remove("no-scroll");
  }, 3000);
});
