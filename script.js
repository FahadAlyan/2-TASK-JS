function convertToSeconds() {
  const hoursInput = document.getElementById("hours").value;
  const hours = Number(hoursInput);

  if (!hoursInput || isNaN(hours) || hours < 0) {
    document.getElementById("result").innerText = "Please enter a valid hours!";
    return;
  }

  const seconds = hours * 3600;
  document.getElementById("result").innerText =
   + hours + " hour(s) = " + seconds + " seconds";


}
