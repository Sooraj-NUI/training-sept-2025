function convertHoursToMinutes(time) {
  let totalMinutes = 0;

  let cleanTime = time.trim().toLowerCase();
  if (!cleanTime) {
    console.error("Empty input");
    return false;
  }

  let isAM = cleanTime.endsWith("am");
  let isPM = cleanTime.endsWith("pm");
  if (isAM || isPM) {
    cleanTime = cleanTime.slice(0, -2).trim();
  }

  let colonCount = 0;
  for (let i = 0; i < cleanTime.length; i++) {
    if (cleanTime[i] === ":") {
      colonCount++;
    }
  }

  if (colonCount < 1 || colonCount > 2) {
    console.error("Invalid time format");
    return false;
  }

  if (colonCount === 1) {
    const timeAsArray = cleanTime.split(":");
    if (timeAsArray.length !== 2) {
      console.error("Invalid time format");
      return false;
    }
    let hours = parseInt(timeAsArray[0]);
    let minutes = parseInt(timeAsArray[1]);
    if (isNaN(hours) || isNaN(minutes)) {
      console.error("Invalid time format");
      return false;
    }
    if (minutes < 0 || minutes > 59) {
      console.error("Invalid minutes");
      return false;
    }
    if (!isAM && !isPM && hours < 0) {
      console.error("Invalid hours");
      return false;
    }
    if ((isAM || isPM) && (hours < 1 || hours > 12)) {
      console.error("Invalid hours in 12h format");
      return false;
    }
    if (isAM && hours === 12) hours = 0;
    if (isPM && hours !== 12) hours += 12;
    totalMinutes = hours * 60 + minutes;
  }

  if (colonCount === 2) {
    const timeAsArray = cleanTime.split(":");
    if (timeAsArray.length !== 3) {
      console.error("Invalid time format");
      return false;
    }
    let hours = parseInt(timeAsArray[0]);
    let minutes = parseInt(timeAsArray[1]);
    let seconds = parseInt(timeAsArray[2]);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      console.error("Invalid time format");
      return false;
    }
    if (minutes < 0 || minutes > 59) {
      console.error("Invalid minutes");
      return false;
    }
    if (seconds < 0 || seconds > 59) {
      console.error("Invalid seconds");
      return false;
    }
    if (!isAM && !isPM && hours < 0) {
      console.error("Invalid hours");
      return false;
    }
    if ((isAM || isPM) && (hours < 1 || hours > 12)) {
      console.error("Invalid hours in 12h format");
      return false;
    }
    if (isAM && hours === 12) hours = 0;
    if (isPM && hours !== 12) hours += 12;
    totalMinutes = hours * 60 + minutes;
    if (seconds >= 30) totalMinutes += 1;
  }

  console.log(totalMinutes);
  return totalMinutes;
}

convertHoursToMinutes("24:30");
convertHoursToMinutes("24:30:20");
