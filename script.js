let round = 1;
let isMaleTurn = true;
let timerInterval;

const maleCards = [
  "ถอดเสื้อ 1 ชิ้น 😳",
  "จูบแฟน 10 วินาที 💋",
  "กอดแฟนแน่นๆ 30 วินาที 🤗",
  "นวดให้แฟน 2 นาที 💆",
  "บอกรักแฟนเสียงดัง 💞",
  "กระซิบคำหื่นๆ ให้แฟน 🔥",
  "จูบแบบห้ามแตะตัว",
  "หลับตาและให้อีกฝ่ายใช้ปากสัมผัสเบาๆ3จุดและให้ทาย",
  "ให้แฟนเลือกตำแหน่งให้จูบ 💦",
  "นั่งบนตักและกอดแน่นๆ30วิ",
  "ใช้นิ้ววาดรูปบนหลังและทายถ้าผิดจูบ1ที",
  "กอดจากด้านหลังแน่นๆและพูดว่ารักจริงจัง",
  "แกล้งจูบและถามว่าอยากให้ต่อมั้ย?",
  "ยื่นหน้าเข้าไปอีกฝ่ายและออกมา",
  "ให้อีกฝ่ายถอดเสื้อผ้าให้1ชิ้น",
  "นอนบนตักให้เค้าลูบหัว",
  "จูบบริเวณเอวและลงมาให้ใกล้ถึง...",
  "จูบแบบดูดดื่ม1นาทีห้ามเอาออก",
  "ทำอะไรก็ได้แต่ห้ามร้องออกมา",
  "ใช้ลิ้นเลียผ่านๆตรงหัว",
  "จูบใต้หน้าอก",
  "เล้าโลม 2 นาที",
  "ห้ามทำอะไรกัน 30 นาที",
  "จูบหน้าผากแฟน 😚"
];

const femaleCards = [
  "พูดคำหวานให้แฟน 3 อย่าง ❤️",
  "ป้อนขนม หรือจูบแทน 🍓",
  "ถอดเสื้อ 1 ชิ้น 😳",
  "กระซิบชื่อเล่นของแฟนเบาๆ 💌",
  "จูบคอแฟน 15 วินาที 😘",
  "ส่งจูบใส่แฟน 😘",
  "จูบแบบห้ามแตะตัว",
  "หลับตาและให้อีกฝ่ายใช้ปากสัมผัสเบาๆ3จุดและให้ทาย",
  "กอดจากข้างหลัง 10 วินาที 🤗",
  "บอกสิ่งที่ชอบที่สุดในตัวแฟน 💖",
  "ใช้นิ้ววาดรูปบนหลังและทายถ้าผิดจูบ1ที",
  "กอดจากด้านหลังแน่นๆและพูดว่ารักจริงจัง",
  "จูบแบบดูดดื่ม1นาทีห้ามเอาออก",
  "แกล้งจูบและถามว่าอยากให้ต่อมั้ย?",
  "ให้เขานั่งเฉยๆและคุณเป็นฝ่ายขึ้นค่อมช้าๆ",
  "ให้อีกฝ่ายถอดเสื้อผ้าให้1ชิ้น",
  "ทำอะไรก็ได้แต่ห้ามร้องออกมา",
  "เล้าโลม 2 นาที",
  "นอนบนตักให้เค้าลูบหัว",
  "จูบบริเวณเอวและลงมาให้ใกล้ถึง...",
  "ถอดเสื้อช้าๆโดยให้อีกฝ่ายมองเฉยๆห้ามแตะต้อง",
  "ยื่นหน้าเข้าไปอีกฝ่ายและออกมา",
  "ทำเสียงน่ารักใส่แฟน 😳"
];

function drawCard() {
  clearInterval(timerInterval);
  document.getElementById("timer").innerText = "";

  const card = document.getElementById("card");
  const roundDisplay = document.getElementById("round");
  const turnDisplay = document.getElementById("turn");

  // 🔥 5% โอกาส JACKPOT
  if (Math.random() < 0.05) {
    card.innerText = "💥 JACKPOT 💥\nมีเซ็กส์กันทั้งคืน 💦🔥";
    roundDisplay.innerText = round;
    turnDisplay.innerText = "จบเกมรอบนี้ 😈";
    round++;
    isMaleTurn = !isMaleTurn;
    return;
  }

  let selectedCard;
  if (isMaleTurn) {
    selectedCard = maleCards[Math.floor(Math.random() * maleCards.length)];
  } else {
    selectedCard = femaleCards[Math.floor(Math.random() * femaleCards.length)];
  }

  card.innerText = selectedCard;
  roundDisplay.innerText = round;
  turnDisplay.innerText = isMaleTurn ? "แฟนหญิง" : "แฟนชาย";
  round++;
  isMaleTurn = !isMaleTurn;

  card.style.opacity = 0;
  setTimeout(() => { card.style.opacity = 1; }, 150);

  startTimerIfNeeded(selectedCard);
}

function startTimerIfNeeded(text) {
  const timerDisplay = document.getElementById("timer");
  let seconds = 0;

  const secondMatch = text.match(/(\d+)\s*วินาที/);
  const minuteMatch = text.match(/(\d+)\s*นาที/);

  if (secondMatch) {
    seconds = parseInt(secondMatch[1]);
  } else if (minuteMatch) {
    seconds = parseInt(minuteMatch[1]) * 60;
  }

  if (seconds > 0) {
    const confirmStart = confirm(`การ์ดนี้ใช้เวลา ${seconds} วินาที\nเริ่มจับเวลาตอนนี้เลยไหม?`);
    if (!confirmStart) {
      timerDisplay.innerText = "⏳ ข้ามการจับเวลารอบนี้";
      return;
    }

    timerDisplay.innerText = `⏳ ${seconds} วินาที`;
    timerInterval = setInterval(() => {
      seconds--;
      if (seconds > 0) {
        timerDisplay.innerText = `⏳ ${seconds} วินาที`;
      } else {
        clearInterval(timerInterval);
        timerDisplay.innerText = "หมดเวลาแล้ว~ 💕";
      }
    }, 1000);
  }
}
