var cookies = 0;
var cookiesPerSecond = 1;
var cookiesPerClick = 1;

function firstTimeLoad() {
  refreshStats();
}

function cookieClick() {
  cookies += cookiesPerClick;
  refreshStats();
}

function refreshStats() {
  var stats = "<p>Cookies: " + cookies + "</p>";
  var statss = "<p> Cookies Per Second (CPS) " + cookiesPerSecond + "</p>"
  document.getElementById('cookiesStats').innerHTML = stats;
  document.getElementById('cookiePerSecondStats').innerHTML = statss;  
}

function cookiePerSecondFunction() {
  cookies = cookies + cookiesPerSecond;
  refreshStats();
}
if (cookiesPerSecond >= 1) {
		window.setInterval(cookiePerSecondFunction, 1000);
	}
