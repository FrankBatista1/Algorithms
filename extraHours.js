function countHours(year, holidays) {
  const hoursToWork = holidays.reduce((accumulator, day) => {
    let dayWithLine = day.split("/").join("-");
    const thisDay = new Date(`${year}-${dayWithLine}`);
    const dayInNumber = thisDay.getDay();
    if (dayInNumber > 0 && dayInNumber < 6) return accumulator + 2;
    return accumulator;
  }, 0);

  return hoursToWork
}

const year = 2022;
const holidays = ["01/06", "04/01", "12/25"];

console.log(countHours(year, holidays));
