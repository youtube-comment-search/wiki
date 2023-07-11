const DAY = 1000 * 60 * 60 * 24;
const SPRINT_PERIOD = 14;
const PROJECT_START_DATE = new Date('2023-07-08');

const formatDate = date =>
  date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

const currentSprintTurn = () =>
  Math.floor(
    (new Date().getTime() - PROJECT_START_DATE.getTime()) / DAY / SPRINT_PERIOD
  ) + 1;
const currentSprintPeriod = turn => ({
  start: formatDate(
    new Date(PROJECT_START_DATE.getTime() + (turn - 1) * DAY * SPRINT_PERIOD)
  ),
  end: formatDate(
    new Date(PROJECT_START_DATE.getTime() + turn * DAY * SPRINT_PERIOD)
  ),
});

const getContent = () => {
  const turn = currentSprintTurn();
  const { start, end } = currentSprintPeriod(turn);

  return {
    title: `${formatDate(new Date())}(토) 회의록 (${turn}차 스프린트)`,
    body: `
📌 ${turn}차 스프린트   
${start} ~ ${end}  

### 이번 스프린트 목표

## 이번주에 한 일 

### 변영화 

> 진행률 %

### 송인제 

> 진행률 %

## 다음주에 할 일 

### 변영화 

### 송인제 

## 기타 
`,
  };
};

module.exports = getContent;
