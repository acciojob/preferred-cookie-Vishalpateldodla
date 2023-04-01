//your JS code here. If required.
var fontsize = document.getElementById("fontsize")
var fontcolor = document.getElementById("fontcolor")

var myCookies = document.cookeie.split(";")

myCookies.map((item) => {
	var cookielist = item.split("=")
})
function onSubmit(event){
	document.cookies = `fontsize = ${fontsize.value}`
	document.cookies = `fontcolor = ${fontcolor.value}`
	event.preventDefault();
}