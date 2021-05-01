let appointments = [];

class DateTime extends Date {
  constructor(props) {
    super(props);
    this.now = new Date();
  }

  dateInThisMonth() {
    return new Date(
      this.now.getFullYear(),
      this.now.getMonth() + 1,
      0
    ).getDate();
  }

  getThisMonth() {
    switch (this.now.getMonth()) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
}

const saveMeeting = function () {
  const meetingDay = document.querySelector("#newMeetingDay").innerText;
  const meetingTime = document.querySelector("#newMeetingTime");
  const meetingName = document.querySelector("#newMeetingName");

  appointments[parseInt(meetingDay) - 1].push(
    meetingTime.value + "-" + meetingDay.value
  );

  meetingTime.value = "";
  meetingName.value = "";
};

const showAppointment = function (day) {};

window.onload = function () {
  const numberOfDays = new DateTime().dateInThisMonth();

  document.querySelector("#month").innerHTML = new DateTime().getThisMonth();

  const calendar = document.querySelector("#calendar");

  for (let i = 0; i < numberOfDays; i++) {
    appointments[i] = [];

    const child = document.createElement("div");
    child.className = "day";

    child.onclick = function () {
      let selected = document.querySelector(".selected");

      if (selected) {
        selected.classList.remove("selected");
      }
      event.currentTarget.classList.add("selected");
    };

    const day = document.createElement("h3");
    const dayOfTheMonth = i + 1;
    day.innerText = dayOfTheMonth;

    child.appendChild(day);
    calendar.appendChild(child);
  }
};
