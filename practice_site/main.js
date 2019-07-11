window.addEventListener('scroll', setNavbarTransparency);

const backgrounds = [
	"./images/wonder/7.jpg",
	"./images/wonder/8.jpg",
	"./images/wonder/9.jpg",
	"./images/wonder/10.jpg",
	"./images/wonder/11.jpg",
	"./images/wonder/12.jpg",
	"./images/wonder/13.jpg",
	"./images/wonder/14.jpg"
];

let continueChangingBD = true;

const changeBackgroundInterval = 10000;

function setNavbarTransparency(){
	let header1Height = $("#mainHeader1").height();
    if (window.scrollY >= header1Height+120) {
		$("#navbar1").removeClass("navbar-transparent");
    } else {
		$("#navbar1").addClass("navbar-transparent");
    }

}

function setMenuItem(){
	let indexPageName = "index.html";
	let joinPageName = "join.html";
	let verifyPageName = "verify.html";
	let applyPageName = "apply.html";
	
	let pathName = window.location.pathname;
	if(!pathName.split("/")[2]
	|| pathName.split("/")[2].indexOf(indexPageName)==0){
		if(window.location.href.toLowerCase().indexOf("mission")>-1){
			$("#nav1Dropdown > ul > li:nth-child(4)").addClass("active");
		}
	}else if(
		pathName.split("/")[2].indexOf(joinPageName)==0
	){
		$("#nav1Dropdown > ul > li:nth-child(1)").addClass("active");
	}else if(
		pathName.split("/")[2].indexOf(verifyPageName)==0
	){
		$("#nav1Dropdown > ul > li:nth-child(2)").addClass("active");
	}else if(
		pathName.split("/")[2].indexOf(applyPageName)==0
	){
		$("#nav1Dropdown > ul > li:nth-child(3)").addClass("active");
	}
}

function changeBackground(){
	let topEl = $("#bgTop");
	let bottomEl = $("#bgBottom");
	let nextPos = Math.floor(Math.random()*backgrounds.length);
	let backImg = backgrounds[nextPos];

	if(topEl.hasClass('hidden')){
		//Hide bottom, show top
		let img = $('<img/>');
		img.attr('src', backImg).on('load', ()=> {
			img.remove();

			topEl.css('background-image', `url(${backImg})`);
			topEl.removeClass('hidden');
			bottomEl.addClass('hidden');

			if(continueChangingBD){
				setTimeout(()=>{
					changeBackground();
				},changeBackgroundInterval);
			}
		});
	}else if(bottomEl.hasClass('hidden')){
		//Hide top, show bottom
		let img = $('<img/>');
		img.attr('src', backImg).on('load', ()=> {
			$(img).remove(); // prevent memory leaks as @benweet suggested	

			bottomEl.css('background-image', `url(${backImg})`);
			bottomEl.removeClass('hidden');
			topEl.addClass('hidden');

			if(continueChangingBD){
				setTimeout(()=>{
					changeBackground();
				},changeBackgroundInterval);
			}
		});
	}
}

$(window).ready(()=>{
	setNavbarTransparency();
	setMenuItem();

	setTimeout(()=>{
		changeBackground();
	}, changeBackgroundInterval/2)
});


function checkPswd() {
	var confirmPassword = "5948";
	var password = document.getElementById("pswd").value;
	if (password == confirmPassword) {
		window.location = "https://discord.gg/vfAcQZj";
	}
	else {
		alert("Passwords do not match.");
	}
}