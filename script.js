let appointments = [];

const datyInThisMonth = function () {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

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

const showAppointment = function (day){
    
}

window.onload = function () {
    const numberOfDays = datyInThisMonth();

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
