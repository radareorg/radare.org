const getEventsJSON = async () => {
    var url = "assets/events.json";
    var events = await fetch(url);
    var jsonEvents = await events.json();
    return jsonEvents;
}



async function fillEvents() {
    let eventsJSON =  await getEventsJSON();
    eventsJSON["events"].forEach(fillSingleEvent);
}

function generateSpeakersHTML (speakers, handles) {
    prefix = handles != "#" && handles.length > 0 ? 'https://twitter.com/' : '';
    if (Array.isArray(speakers) && Array.isArray(handles))
    {
        var speakersHTMLItems = [];
        speakers.forEach((v, i) => {
                handle = i < handles.length ? handles[i] : "#";
                speakersHTMLItems.push('<a href="' + prefix + handle + '">' + v + '</a>');
            }
        );
        return speakersHTMLItems.join(', ');
    }
    return '<a href="' + prefix + handles + '">' + speakers + '</a>';
}

async function fillSingleEvent(item, index) {
    var colors = ["blue", "green", "yellow", "red"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    title = item.title;
    handles = "handles" in item ? item.handles : "#";
    speakers = item.speakers;
    speakersHTML = generateSpeakersHTML(speakers, handles);
    description = item.description;
    $("#talks").append(
        `
        <div class="nes-container with-title border-` + randomColor + `">
        <p class="title"><b>` + title + `</b></p>
        <span class="nes-text is-primary">` + speakersHTML + `</span>
        <p>` + item.description  + `</p>
        </div>`);
}

fillEvents();