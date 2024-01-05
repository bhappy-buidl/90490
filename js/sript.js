//sobriety timer
let currentDay = 1; // Start from day 1
let meetingsAttended = 0;

function incrementMeeting() {
    if (meetingsAttended < 90) {
        meetingsAttended++;
        document.getElementById('meetings-attended').textContent = meetingsAttended;
    }
}

function decrementMeeting() {
    if (meetingsAttended > 0) {
        meetingsAttended--;
        document.getElementById('meetings-attended').textContent = meetingsAttended;
    }
}

// Update current day somewhere in your code, depending on your logic
document.getElementById('current-day').textContent = currentDay;