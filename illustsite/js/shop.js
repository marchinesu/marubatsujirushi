const doorLeft = document.getElementById("doorLeft");
const doorRight = document.getElementById("doorRight");
const roof = document.getElementById("roof");
const road = document.getElementById("road");
const flyer = document.getElementById("flyer");
const buttons = document.getElementById("buttons");
const bottomNav = document.getElementById("bottomNav");

function update() {
  const y = window.scrollY;

  // 扉
  const doorEnd = 400;
  const initialOpen = 0.01;
  const t = Math.min(y / doorEnd, 1);
  const scale = Math.max(1 - initialOpen - t * (1 - initialOpen), 0);
  const scaleY = 1 + t * 0.5;
  doorLeft.style.transform = `scaleX(${scale}) scaleY(${scaleY})`;
  doorRight.style.transform = `scaleX(${scale}) scaleY(${scaleY})`;

  // 屋根
  const roofOffset = -t * 55;
  roof.style.transform = `translateY(${roofOffset}px)`;
  roof.style.opacity = scale;

  // 道
  const roadOffset = t * 55;
  road.style.transform = `translateY(${roadOffset}px)`;
  road.style.opacity = scale;

  // チラシ
  const dropStart = 400;
  const dropEnd = 800;
  const stayEnd = 1200;
  const exitEnd = 1600;
  const stayY = window.innerHeight / 2 - 85;

  if (y <= dropStart) {
    flyer.style.opacity = 0;
    flyer.style.transform = `translate(-50%, -220px)`;
  } else if (y <= dropEnd) {
    const r = (y - dropStart) / (dropEnd - dropStart);
    const yPos = -220 + r * (stayY + 220);
    flyer.style.opacity = 1;
    flyer.style.transform = `translate(-50%, ${yPos}px) rotate(${r * 5}deg)`;
  } else if (y <= stayEnd) {
    flyer.style.opacity = 1;
    flyer.style.transform = `translate(-50%, ${stayY}px) rotate(5deg)`;
  } else if (y <= exitEnd) {
    const r = (y - stayEnd) / (exitEnd - stayEnd);
    const yPos = stayY - r * 600;
    flyer.style.opacity = 1;
    flyer.style.transform = `translate(-50%, ${yPos}px) rotate(${5 - r * 5}deg)`;
  } else {
    flyer.style.opacity = 0;
  }

  // ボタン
  const buttonStart = 1500;
  buttons.style.opacity = y >= buttonStart ? Math.min((y - buttonStart) / 300, 1) : 0;
  if (y >= buttonStart) buttons.style.pointerEvents = "auto";

  // 下部ナビ
  const navStart = 1800;
  if (y >= navStart) bottomNav.classList.add("show");
  else bottomNav.classList.remove("show");

  // ドアクリック可否
  if (y < 50) {
    doorLeft.style.pointerEvents = 'auto';
    doorRight.style.pointerEvents = 'auto';
  } else if (y >= 800) {
    doorLeft.style.pointerEvents = 'none';
    doorRight.style.pointerEvents = 'none';
  }
}

window.addEventListener("scroll", update);
update();

// 扉クリックでスクロール
function scrollToY(targetY, duration = 2000, callback) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 0.5 - Math.cos(progress * Math.PI) / 2;
    window.scrollTo(0, startY + diff * ease);

    if (progress < 1) requestAnimationFrame(step);
    else if (callback) callback();
  }

  requestAnimationFrame(step);
}

function enterShop() {
  scrollToY(800, 800, () => {
    doorLeft.style.pointerEvents = 'none';
    doorRight.style.pointerEvents = 'none';
  });
}

doorLeft.addEventListener("click", enterShop);
doorRight.addEventListener("click", enterShop);
