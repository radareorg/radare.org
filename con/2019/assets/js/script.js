const getEventsJSON = async () => {
    var url = "assets/events.json";
    var events = await fetch(url);
    var jsonEvents = await events.json();
    return jsonEvents;
}

async function fillEvents() {
    let eventsJSON =  await getEventsJSON();
    calendar = eventsJSON["calendar"]
    calendar.forEach(function(day) {
        eventsContainer = $("<div></div>").addClass("containers");
        $("#agendaSection").append($('<h3>').attr('id', "sep"+day["date"]).append(day["day"] + ", September " + day["date"] + " | " + day["description"]));
        eventsList = $("<div></div>").addClass("item");
        $(".dayNavigator").append($("<span></span>").append($('<a>',{href : "#sep"+day["date"], text: day["day"]})).append(" | "))


        dailyEvents = day["events"];
        dailyEvents.forEach( function(event, index) {
            eventDiv = fillSingleEvent(event);
            $("#agendaSection").append(eventDiv);
        });
        $("#agendaSection").append("<p><br><hr><br></p>")        
    });
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

function fillSingleEvent(event) {
    var colors = ["blue", "green", "yellow", "red"];
    var randomColor = colors[Math.floor(Math.random()*colors.length)];
    eventDiv = $("<div>").addClass("nes-container with-title border-"+randomColor);

    title = event.title;
    time = event["time"];
    eventDiv.append(
        `
        <p class="title"><b>` + title + `</b></p>
        <p><i class="fa fa-clock-o"> </i><small> `  + time + `</small></p>`);

    if ("description" in event) {
        handles = "handles" in event ? event.handles : "#";
        speakers = event.speakers;
        speakersHTML = generateSpeakersHTML(speakers, handles);
        description = event.description;
        eventDiv.append(
            `<span class="nes-text is-primary">` + speakersHTML + `</span>
            <p>` + event.description  + `</p>`);
    }
    return eventDiv;
}

fillEvents();