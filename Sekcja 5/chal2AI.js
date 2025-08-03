`use strict`;
// TODO/BUG/FIX
// Need to know what you want to do / how it works
// You can't fix a bug if you don't know what it is (just tell AI to fix it)
// Understand code you are write already in 100%
// It's to be fastter and learn more things
/*
Time tracking application: for freelancers.
Need a funciton which receives daily work hours for
a certain week and returns the total hours worked.

1. Total hours worked in a week
2. Average dail hours worked
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35+ hours)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0};

*/
("use strict");

function analyzeWeek(hours) {
  const days = [
    "poniedziałek",
    "wtorek",
    "środa",
    "czwartek",
    "piątek",
    "sobota",
    "niedziela",
  ];

  // 1. Suma godzin
  const total = hours.reduce((a, b) => a + b, 0);
  // reduce nie trzeba pisać pętli aby obliczyć sumę
  // a - to poczatkowy wyraz (0)
  // b - to kolejny wyraz z tablicy ktory jest dodawany do a
  // potem a jest równe b i dalej dodawane są kolejne wyrazy

  // 2. Średnia godzin dziennie
  const avg = total / hours.length;

  // 3. Dzień z największą ilością godzin
  const maxHours = Math.max(...hours);
  const maxDayIndex = hours.indexOf(maxHours);
  const maxDayName = days[maxDayIndex];
  // (...hours) - rozkłada cała tablicę na liczby
  // dodając Math.max() znajdziemy największą liczbę
  // hours.indexOf(maxHours) - zwraca indeks największej liczby
  // days[maxDayIndex] - zwraca nazwę dnia z największą liczbą godzin

  // 4. Liczba przepracowanych dni (nie liczymy 0)
  const workedDays = hours.filter((h) => h > 0).length;
  // filter tworzy nową tablicę z elmentami
  // spełniającymi warunek

  // 5. Czy pełny etat (35+ godzin)
  const isFullTime = total >= 35;

  return {
    sumaGodzin: total,
    sredniaGodzin: avg,
    dzienNajwiecej: maxDayName,
    liczbaDni: workedDays,
    pelnyEtat: isFullTime,
  };
}

// TEST DATA
const week = [7.5, 8, 6.5, 0, 8.5, 4, 0];
console.log(analyzeWeek(week));
