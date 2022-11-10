const JSON_DATA_FILE="https://opensheet.elk.sh/1277dVr2ASH9Mt1DSw44_u43J_xhsSCKXjvJjJTQoZ2I/1",
IMAGES_PATH="img/",
MIN_SEARCH_LENGTH=2,
SEARCH_BAR=document.getElementById("sercxilo"),
DATA_OUTPUT_DIV=document.getElementById("resultat"),
LOAD_MORE_BUTTON=document.getElementsByClassName("load-more"),
TOTAL_RECORD_COUNT=document.getElementById("total-record-count"),
SEARCH_RESULT_COUNT=document.getElementById("search-result-count"),
LOAD_TIME_ID=document.getElementById("load-time"),
SALE_RESULT_COUNT=document.getElementById("sale-count"),
DEBUG_DIV=document.getElementById("debug");

function sortJsonByProperty(e){
  return function(t,n){
    return t[e]>n[e]?1:t[e]<n[e]?-1:0
  }
}

function formatDate(e){
  let t=/(\d{4})(\d{2})(\d{2})/,n=new Date(e.replace(t,"$1-$2-$3"));
  return n.toString().substring(4,15)
}

function resetDefaults(){
  RESULT_COUNTERS_ID.style.display="none",
  SEARCH_BAR.value="",
  DATA_OUTPUT_DIV.innerHTML="",
  LOAD_MORE_ID.style.display="none",
  LOAD_TIME_ID.style.display="none",
  BUTTON_TOP_ID.style.display="none",
  DEBUG_DIV.style.display="none",
  SEARCH_BAR.focus()
}
function showCredits(e){
  var t=document.getElementById("formulari"),
  n=document.getElementById("credits");
  !0==e?(t.style.display="none",n.style.display="block"):(t.style.display="block",n.style.display="none")
}

SEARCH_BAR.addEventListener("keyup",function(e){
  "Enter"===e.key&&SEARCH_BAR.blur()
}),
SEARCH_BAR.addEventListener("keyup",e=>{
  let t=e.target.value,
  n=performance.now();
  fetch(JSON_DATA_FILE)
    .then(e=>e.json())
    .then(function(e){
      t=(t=t.trim()).replace(/[|&;$%@"<>()\.//\\+,]/g,"");
      let r="",l=0,o="",i="";
      if(0!==l||t.length>0){
        t.split(" ").forEach(function(e){
          r+=`(?=.*${e=e.trim()})`});let s=RegExp(r,"gi");e.

forEach(function(e,t){(-1!=e.title.search(s)||-1!=e.tags.search(s))&&(l+=1,o+=`

          <div class="videoelement">
                  <a href="#" onCLick="openVideo('${e.videoid}')"><img src="https://i.ytimg.com/vi/${e.videoid}/hqdefault.jpg" class="miniatura"></a>
                <p><strong>${e.title}</strong></p>
                <p>${e.descriptions}</p>
        </div>
        `)}
      )}
  DATA_OUTPUT_DIV.innerHTML=o,
  SEARCH_RESULT_COUNT.innerHTML=l,
  SALE_RESULT_COUNT.innerHTML=0,
  document.querySelectorAll(".product-item");
  let a=performance.now();0!==l&&t.length>2&&(i=`${(a-n).toFixed(2)} ms`)//,LOAD_TIME_ID.style.display="block",LOAD_TIME_ID.innerHTML=i
}).catch(function(e){
    console.log("There was an error with the JSON data file request comorl.",e)}
  )}),document.addEventListener("DOMContentLoaded",
  function(){fetch(JSON_DATA_FILE).then(e=>e.json()).then(function(e){
    let t=Object.keys(e).length,n="";t&&(n=`${t}`)//,
    //TOTAL_RECORD_COUNT.innerHTML=n
    }).catch(function(e){console.log("There was an error with the JSON data file requestss.",e)})}),document.addEventListener("error",function(e){if("img"!==e.target.tagName.toLowerCase())return;let t;e.target.alt.toLowerCase().includes("product image")&&(e.target.src="img/placeholder/product.jpg",e.target.alt="Image not found.")},!0);

        function trigger(el, eventType) {
  if (typeof eventType === 'string' && typeof el[eventType] === 'function') {
    el[eventType]();
  } else {
    const event =
      eventType === 'string'
        ? new KeyboardEvent(eventType, {bubbles: true})
        : eventType;
    el.dispatchEvent(event);
  }
}

function openVideo(videoid) {
  var player = document.getElementById("player-bg");
  var ytplayer = document.getElementById("ytplayer");
  ytplayer.innerHTML = '<iframe width="50%" height="auto" src="https://www.youtube.com/embed/'+videoid+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  
  player.style.display='block';
}

function closeVideo() {
  var player = document.getElementById("player-bg");
  var ytplayer = document.getElementById("ytplayer");
  ytplayer.innerHTML="";
  player.style.display='none';
}

function showTag(thetag) {
  const e = new Event("keyup");
  var cercador = document.getElementById("sercxilo");
  cercador.value = thetag;
  cercador.dispatchEvent(e);
  //trigger(cercador,"onkeyup");
}
