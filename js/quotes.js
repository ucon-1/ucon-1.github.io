const quotes = [
  { quotes: "늦었다고 생각할 때가 늦었다.", author: "박명수" },
  { quotes: "즐길 수 없으면 피하라.", author: "거성" },
  { quotes: "고생 끝에 골병 난다.", author: "하찮은" },
  { quotes: "참을 인 세 번이면 호구.", author: "G-Park" },
  { quotes: "내일도 할 수 있는 일을 굳이 오늘 할 필요 없다.", author: "꼴뚜기" },
  { quotes: "일찍 일어난 새가 피곤하다.", author: "악마의 아들" },
  { quotes: "티끌 모아 티끌.", author: "바다의 왕자" },
  { quotes: "어려운 길은 길이 아니다.", author: "늙은 악마" },
  { quotes: "하나를 보고 열을 알면 무당.", author: "할명수" },
  { quotes: "시작은 반이 아니다. 시작일 뿐이다.", author: "박차장" },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;
