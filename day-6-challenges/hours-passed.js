function calculateTotalHoursElapsed(startTime, endTime) {
  if (!startTime || !endTime) {
    return "Both start and end times are required";
  }

  function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    if (!time || !period || isNaN(hours) || isNaN(minutes)) {
      return "Invalid format must be 'H:MM AM/PM'";
    }

    let hour24 = hours;

    // Convert to 24-hour format
    if (period.toLowerCase() === "pm" && hours !== 12) {
      hour24 += 12;
    } else if (period.toLowerCase() === "am" && hours === 12) {
      hour24 = 0;
    }
    return { hours: hour24, minutes: minutes || 0 };
  }

  // Parse start and end times
  const start = parseTime(startTime);
  const end = parseTime(endTime);

  if (typeof start !== "object" || typeof end !== "object") {
    return "invalid format";
  }
  // Convert times to total minutes
  const startMinutes = start.hours * 60 + start.minutes;
  const endMinutes = end.hours * 60 + end.minutes;

  // Handle case where end time is next day (e.g., 9 PM to 6 AM)
  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60; // Add 24 hours worth of minutes
  }

  // Calculate difference in minutes and convert to hours:minutes format
  const diffMinutes = endMinutes - startMinutes;
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  // Format as "H:MM"
  const formattedTime = `${hours}:${minutes.toString()}`;
  return formattedTime;
}

console.log(calculateTotalHoursElapsed("9:00 AM", "10:00 AM"));
console.log(calculateTotalHoursElapsed("9:00 AM", "3:00 PM"));
console.log(calculateTotalHoursElapsed("9:15 AM", "3:40 PM"));
