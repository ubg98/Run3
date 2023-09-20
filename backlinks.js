// Backlinks Code Go Here!
const backlinksList= [{
  link: "https://slopegame.gitlab.io/car-games.html",
  text: "CAR",
}, {
  link: "https://slopegame.gitlab.io/bus-games.html",
  text: "BUS",
}, {
  link: "https://slopegame.gitlab.io/truck-games.html",
  text: "TRUCK",
}, {
  link: "https://slopegame.gitlab.io/bike-games.html",
  text: "BIKE",
},];

function inFrame () {
  try {
      return window.self !== window.top;
  } catch (e) {
      return true;
  }
}

function botBrowser() {
try {
  return navigator.webdriver
} catch (e) {
    return true;
}
}

function closeBacklinks() {
document.getElementById("backlinksPlace").style.display= "none";
return false;
}

function insertBacklinks() {
if (inFrame()) {
  return false;
}
let backlinksHTML= "";
backlinksHTML= "<ul style=\"color: #ffffff; padding: 0px; margin: 0px; font-family: \"Montserrat\"; font-size: 20px;\">";
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: left;\">"+
    "<a style=\"color: #ffffff; text-decoration: none;\" href= \"//slopegame.gitlab.io\">"+ decodeURIComponent(escape("\xF0\x9F\x8F\xA0")) +"</a>"+
    "</li>";
for (let i=0; i< backlinksList.length; i++) {
  backlinksHTML+= "<li style=\"padding: 10px; display: inline-block;\">"+
      "<a style=\"color: #ffffff;\" href=\""+
      backlinksList[i].link+ "\">"+
      backlinksList[i].text+
      "</a>"+
      "</li>";
}
backlinksHTML+= "<li style=\"padding: 10px; display: inline-block; float: right;\">"+
    "<a onclick= \"return closeBacklinks();\" style=\"color: #ffffff; text-decoration: none;\" href=\"#\">"+ decodeURIComponent(escape("\xE2\x9D\x8C")) +"</a>"+
    "</li>";
backlinksHTML+= "</ul>";
const backlinksPlace = document.createElement("div");
backlinksPlace.setAttribute("id", "backlinksPlace");
backlinksPlace.style.cssText = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: #2C3E50; opacity: 0.8;";
backlinksPlace.innerHTML= backlinksHTML;
window.document.body.insertBefore(backlinksPlace, window.document.body.firstChild);
}

addEventListener("load", insertBacklinks);
setTimeout(closeBacklinks, 5* 60* 1000);
