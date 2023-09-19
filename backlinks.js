// Backlinks Code Go Here!
const backlinksList= [{
    link: "https://ubg89.github.io/Run2/",
    text: "Run 2",
  }, {
    link: "https://html5.games235.com/g-switch-3-unblocked.html",
    text: "GSwitch 3",
  }, {
    link: "https://html5.games235.com/sling-tomb-unblocked.html",
    text: "Sling Tomb",
  }, {
    link: "https://html5.games235.com/jump-run-games.html",
    text: "Jum & Run Games",
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
  backlinksHTML= "<ul style=\"color: #ffffff; padding: 0px; margin: 0px; font-size: 20px;\">";
  backlinksHTML+= "<li style=\"padding: 5px; display: inline-block; float: left;\">"+
      "<a style=\"color: #ffffff; text-decoration: none;\" href= \"//ads.games235.com\">"+ decodeURIComponent(escape("\xF0\x9F\x8F\xA0")) +"</a>"+
      "</li>";
  for (let i=0; i< backlinksList.length; i++) {
    backlinksHTML+= "<li style=\"padding: 5px; display: inline-block;\">"+
        "<a style=\"color: #ffffff;\" href=\""+
        backlinksList[i].link+ "\">"+
        backlinksList[i].text+
        "</a>"+
        "</li>";
  }
  backlinksHTML+= "<li style=\"padding: 5px; display: inline-block; float: right;\">"+
      "<a onclick= \"return closeBacklinks();\" style=\"color: #ffffff; text-decoration: none;\" href=\"#\">"+ decodeURIComponent(escape("\xE2\x9D\x8C")) +"</a>"+
      "</li>";
  backlinksHTML+= "</ul>";
  const backlinksPlace = document.createElement("div");
  backlinksPlace.setAttribute("id", "backlinksPlace");
  backlinksPlace.style.cssText = "width: 100%; text-align: center; position: absolute; top: 0px; z-index: 999; background: #7777ff; opacity: 0.8";
  backlinksPlace.innerHTML= backlinksHTML;
  window.document.body.insertBefore(backlinksPlace, window.document.body.firstChild);
}

addEventListener("load", insertBacklinks);
setTimeout(closeBacklinks, 60000);
