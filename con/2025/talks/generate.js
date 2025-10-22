const fs = typeof Deno !== 'undefined' ? {
  readFileSync: (path) => Deno.readTextFileSync(path),
  writeFileSync: (path, data) => Deno.writeTextFileSync(path, data)
} : require("fs");

const gShowTitle = false;
const gShowEndTime = false;

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}

const content = fs.readFileSync("talks.md", "utf8");
const lines = content.split("\n");

const days = [];
let currentDay = null;

for (const line of lines) {
  if (line.startsWith("### ")) {
    const dateStr = line.slice(4);
    currentDay = { date: dateStr, startTime: null, talks: [] };
    days.push(currentDay);
  } else if (line.startsWith("Starting at ")) {
    const timeStr = line.slice(12);
    currentDay.startTime = timeStr;
  } else if (line.startsWith("* ")) {
    const talkStr = line.slice(2);
    const parts = talkStr.split(";");
    const duration = parseInt(parts[0]);
    const speaker = parts[1];
    const title = stripHtml(parts[2] || "");
    currentDay.talks.push({ duration, speaker, title });
  }
}

// Now, compute times
const year = 2025;
const monthNames = { "October": 9 }; // 0-based

for (const day of days) {
  const [dayName, dayNum, month] = day.date.split(" ");
  const [hour] = day.startTime.split("h ");
  const dateStr = `${year}-${String(monthNames[month]+1).padStart(2,'0')}-${String(parseInt(dayNum)).padStart(2,'0')}T${String(parseInt(hour)).padStart(2,'0')}:00:00+02:00`;
  let currentTime = new Date(dateStr);

  for (const talk of day.talks) {
    talk.start = new Date(currentTime);
    currentTime.setMinutes(currentTime.getMinutes() + talk.duration);
    talk.end = new Date(currentTime);
    // Compute CEST time
    const cestHour = talk.start.getUTCHours() + 2;
    const cestMin = talk.start.getUTCMinutes();
    talk.cestTime = `${String(cestHour).padStart(2,'0')}:${String(cestMin).padStart(2,'0')}`;
  }
}

// Now, generate HTML
let html = ""
for (const day of days) {
  html += `<h2>${day.date}</h2>
<table border="0">`;
	if (gShowTitle) {
html += `<tr><th>Time (CEST)</th><th>Speaker</th><th>Title</th></tr>`;
	}
  for (const talk of day.talks) {
    html += `<tr data-start="${talk.start.toISOString()}" data-end="${talk.end.toISOString()}">
<td class="time">${talk.cestTime}</td>
<td>${talk.speaker}</td>
<td>${talk.title}</td>
</tr>
`;
  }
  html += `</table>
`;
}

html += `
<script>
function adjustTimes() {
  const rows = document.querySelectorAll('tr[data-start]');
  rows.forEach(row => {
    const start = new Date(row.dataset.start);
    const end = new Date(row.dataset.end);
    const timeCell = row.querySelector('.time');
    const localStart = start.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});`;
if (gShowEndTime) {
    html += `    const localEnd = end.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});
    timeCell.textContent = \`\${localStart} - \${localEnd}\`;
    `;
    } else {
    html += `timeCell.textContent = \`\${localStart}\`;`;
    }
html += `
  });
}
adjustTimes();
</script>
`;

fs.writeFileSync("schedule.html", html);

// Now, generate .ical
let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//r2con2025//Schedule//EN
`;

for (const day of days) {
  for (const talk of day.talks) {
    const uid = `r2con2025-${talk.start.getTime()}`;
    const dtstart = talk.start.toISOString().replace(/[:-]/g, '').slice(0,15) + 'Z';
    const dtend = talk.end.toISOString().replace(/[:-]/g, '').slice(0,15) + 'Z';
    ical += `BEGIN:VEVENT
UID:${uid}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:${talk.title}
DESCRIPTION:Speaker: ${talk.speaker}
END:VEVENT
`;
  }
}

ical += `END:VCALENDAR
`;

fs.writeFileSync("r2con2025.ics", ical);

console.log("Generated schedule.html and r2con2025.ics");
