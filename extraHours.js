function countHours(year, holidays) {
  return hoursToWork = holidays.reduce((accumulator, day) => {
    const thisDay = new Date(`${day}/${year}`).getDay();
    const isWorkDay = thisDay !== 0 && thisDay !== 6; 
    return isWorkDay ? accumulator + 2 : accumulator;
  }, 0);
}

const year = 2023;
const holidays = ["12/29", "04/01", "12/25"];

console.log(countHours(year, holidays));
