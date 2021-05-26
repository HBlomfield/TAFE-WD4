var sfxVolume = 1;
var musicVolume = 1;
var masterVolume = 1;
// var videoShouldBePaused = true;
var currentClass = -1;
var currentGift = -1

var currentBody = -1
var currentFace = -1
var currentHair = -1
var currentHCol = -1
var classes = [
	{
		name:"Warrior",
		description:"Fearless Warrior.<br />Weapon expert. High<br/>strength, dexterity.",
		level:4,
		vitality:11,
		attunement:8,
		endurance:12,
		strength:13,
		dexterity:13,
		resistance:11,
		intelligence:9,
		faith:9,
	},{
		name:"Knight",
		description:"Low-ranking knight.<br />High HP, solid armor.<br />Not easily toppled.",
		level:5,
		vitality:14,
		attunement:10,
		endurance:10,
		strength:11,
		dexterity:11,
		resistance:10,
		intelligence:9,
		faith:11,
	},{
		name:"Wanderer",
		description:"Aimless wanderer.<br />Wields scimitar.<br />High dexterity.",
		level:3,
		vitality:10,
		attunement:11,
		endurance:10,
		strength:10,
		dexterity:14,
		resistance:12,
		intelligence:11,
		faith:8,
	},{
		name:"Thief",
		description:"Guilt-ridden thief.<br />High critical hits.<br />Has Master Key.",
		level:5,
		vitality:9,
		attunement:11,
		endurance:9,
		strength:9,
		dexterity:15,
		resistance:10,
		intelligence:12,
		faith:11,
	},{
		name:"Bandit",
		description:"Savage Bandit.<br />High Strength. Wields<br/>a heavy battleaxe.",
		level:4,
		vitality:12,
		attunement:8,
		endurance:14,
		strength:14,
		dexterity:9,
		resistance:11,
		intelligence:8,
		faith:10,
	},{
		name:"Hunter",
		description:"Bow-wielding hunter.<br />OK at close-range<br />but weak with magic.",
		level:4,
		vitality:11,
		attunement:9,
		endurance:11,
		strength:12,
		dexterity:14,
		resistance:11,
		intelligence:9,
		faith:9,
	},{
		name:"Sorcerer",
		description:"Sorcerer of Vinheim <br />Dragon School.<br />Casts soul sorceries.",
		level:3,
		vitality:8,
		attunement:15,
		endurance:8,
		strength:9,
		dexterity:11,
		resistance:8,
		intelligence:15,
		faith:8,
	},{
		name:"Pyromancer",
		description:"Great Swamp pyromancer.<br />Casts fire spells and<br />wields a hand axe.",
		level:1,
		vitality:10,
		attunement:12,
		endurance:11,
		strength:12,
		dexterity:9,
		resistance:12,
		intelligence:10,
		faith:8,
	},{
		name:"Cleric",
		description:"Cleric on pilgrimage.<br />Wields a mace and<br />casts healing miracles.",
		level:2,
		vitality:11,
		attunement:11,
		endurance:9,
		strength:12,
		dexterity:8,
		resistance:11,
		intelligence:8,
		faith:14,
	},
];
var gifts = [
	{
		name:"None",
		description:"No sign of a gift."
	},{
		name:"Goddess's Blessing",
		description:"Divine holy water. Fully restores HP and status."
	},{
		name:"Black Firebomb",
		description:"Explodes upon impact when thrown. More deadly than std bomb."
	},{
		name:"Twin Humanities",
		description:"Tiny sprite called humanity. Sometimes found on carcasses."
	},{
		name:"Binoculars",
		description:"Binoculars. Used to peer at faraway sights."
	},{
		name:"Pendant",
		description:"Trinket. No effect, but fond memories comfort travelers."
	},{
		name:"Master Key",
		description:"Opens any basic lock. Initial equip for thief."
	},{
		name:"Tiny Being's Ring",
		description:"Special tribal ring. Slightly raises HP."
	},{
		name:"Old Witch's Ring",
		description:"Gift from a witch. Ancient ring with no obvious effect."
	},

];
var bodies = [
	{
		name:"Average",
		description:"Standard physique"
	},{
		name:"Slim",
		description:"Slim physique"
	},{
		name:"Very Slim",
		description:"Very slim physique. Skin and bones."
	},{
		name:"Large",
		description:"Large physique"
	},{
		name:"Very Large",
		description:"Very large build. Serious presence."
	},{
		name:"Large Upper Body",
		description:"Rippled physique, esp. upper body."
	},{
		name:"Large Lower Body",
		description:"Large physique, mostly lower body."
	},{
		name:"Top-Heavy",
		description:"Large head. Could be very intellectual."
	},{
		name:"Tiny Head",
		description:"Porportionately small head"
	},

];
var faces = [
	{
		name:"Commoner",
		description:"Very average commoner face."
	},{
		name:"Delta Farmer",
		description:"Commonly seen face in the Fivefinger Delta."
	},{
		name:"Astora Noble",
		description:"Handsome face of the refined. Common in Astora."
	},{
		name:"Dragon Scholar",
		description:"Intellegent, sharp lines, but scholarly looks invite insults."
	},{
		name:"Thorolund Cleric",
		description:"Look common in Thorolund, known for its stalwart clerics."
	},{
		name:"Jubliant Catarina",
		description:"Jovial features of Catarina, known for festivity and drink."
	},{
		name:"Dubious Carim",
		description:"Ominous features associated with the Earl of Carim."
	},{
		name:"Common Zena",
		description:"Thoughtful, mature face common in historical Zena."
	},{
		name:"Eerie Great Swamp",
		description:"Great Swamp heretics face prejudice for their atypical looks."
	},

];
var hairs = [
	{
		name:"Shaved",
		description:"Cleany shaved bald head."
	},{
		name:"Receeding",
		description:"Rough warrior hair, shows age."
	},{
		name:"Short",
		description:"Clipped short with a slight wave."
	},{
		name:"Swept Back",
		description:"Long hair pulled back."
	},{
		name:"Ponytail",
		description:"Long hair pulled back and bound."
	},{
		name:"Wild",
		description:"Natural long hair, accented by sweat."
	},{
		name:"Parted Center",
		description:"Neatly kept hair, common for youth."
	},{
		name:"Curly",
		description:"Sharply curled hair, cut short."
	},{
		name:"Bobbed",
		description:"Neatly trimmed, as the old nobility."
	},

];
var hcols = [
	{
		name:"Black",
		description:"Black hair/eyes. Basic color."
	},{
		name:"Dark Brown",
		description:"Dark brown hair/eyes. Basic color."
	},{
		name:"Light Brown",
		description:"Light brown hair/eyes. Basic color."
	},{
		name:"Dark Red",
		description:"Dakr red hair/eyes. Basic color."
	},{
		name:"Dark Blue",
		description:"Dark blue hair/eyes. Common in Carim."
	},{
		name:"Gray",
		description:"Gray hair/eyes. Common in N. Catarina."
	},{
		name:"Gold",
		description:"Gold hair/eyes. Beloved by certain members of nobility."
	},{
		name:"Silver",
		description:"Silver hair/eyes. Considered antiquated in these times."
	},{
		name:"Red",
		description:"Burning red hair/eyes. Very rare color."
	},

];

// function onYouTubeIframeAPIReady () {
// 	video = new YT.Player("youtube-music-box", {//initialise the video in the div with the same id
// 		// width:200,
// 		// height:200,
// 		//videoID:"R2DTXCEXnTU",
// 		events: {
// 			onReady: init,
// 			// onStateChange: preventPause
// 		}
// 	});
// }

$(".btn").mouseenter(function(){
	var newSound = document.createElement("audio");
	newSound.src="sfx/cursor_select.mp3";
	newSound.volume=sfxVolume * masterVolume;
	newSound.play();
	// $("#cursor-move")[0].play();
});

function changeSlider(){
	var newSound = document.createElement("audio");
	newSound.src="sfx/cursor_move.mp3";
	newSound.volume=sfxVolume * masterVolume;
	newSound.play();
	$("#music")[0].volume = musicVolume*masterVolume;

	// $("#cursor-move")[0].play();
}

function setMasterVolume (set) {
	masterVolume = set;
	localStorage.setItem("masterVolume", masterVolume.toString());
}
function setEffectVolume (set) {
	sfxVolume = set;
	localStorage.setItem("effectVolume", sfxVolume.toString());

}
function setMusicVolume (set) {
	musicVolume = set;
	$("#music")[0].volume = musicVolume*masterVolume;
	// video.setVolume(Math.round(musicVolume*100 * masterVolume));
	localStorage.setItem("musicVolume", musicVolume.toString());
}

function openMenu (toOpen) {
	document.body.className = "menu-"+toOpen;
	$("#current-title")[0].innerHTML = ["New Game","Load Game","Options","Quit"][toOpen-1];

	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	if (toOpen!=0 && toOpen !=4) {
		newSound.src="sfx/cursor_ok.mp3";
		$("#music")[0].volume = musicVolume*masterVolume;
		$("#music")[0].currentTime=0;
		$("#music")[0].play();
	} else {
		newSound.src="sfx/cursor_cancel.mp3";
		$("#music")[0].volume = musicVolume*masterVolume;
		$("#music")[0].currentTime=0;
		$("#music")[0].pause();
	}
	// switch (toOpen) {
	// 	case 0:
	// 	case 4:
	// 		videoShouldBePaused = true;
	// 		break;
	// 	case 1:
	// 	case 2:
	// 	case 3:
	// 		videoShouldBePaused = false;
	// 		break;
	// 	default:
	// 		videoShouldBePaused = true;
	// 		break;
	// }
	newSound.play();
}



// function preventPause () {
// 	if (!videoShouldBePaused){
// 		//console.log("Tried to pause the video, Stopped.");
// 		video.playVideo();
// 	} else {
// 		//console.log("Tried to start the video, Stopped.");
// 		video.pauseVideo();
// 	}
// 	video.setVolume(Math.round(musicVolume*100 * masterVolume));

// }

//https:\/\/www.youtube.com/watch?v=IMWTyxrBgRU
// function init() {
// 	video.loadVideoById("IMWTyxrBgRU", 0);
// 	video.playVideo();
// 	video.pauseVideo();
// 	console.log(video.getVideoUrl());
// 	setInterval(preventPause, 500);
// }

function hoverClass(hov) {
	$("#class-description-box")[0].innerHTML = classes[hov].description;
	$("#class-image")[0].src="images/" + classes[hov].name.toLowerCase() + ".webp";
    $("#class-image")[0].alt=classes[hov].name;
	$("#stat-level")[0].innerHTML = classes[hov].level;
	$("#stat-vitality")[0].innerHTML = classes[hov].vitality;
	$("#stat-attunement")[0].innerHTML = classes[hov].attunement;
	$("#stat-strength")[0].innerHTML = classes[hov].strength;
	$("#stat-dexterity")[0].innerHTML = classes[hov].dexterity;
	$("#stat-resistance")[0].innerHTML = classes[hov].resistance;
	$("#stat-intelligence")[0].innerHTML = classes[hov].intelligence;
	$("#stat-faith")[0].innerHTML = classes[hov].faith;
	$("#stat-humanity")[0].innerHTML = "0";
}

function setClass(set) {
	for (var i=0;i<9;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[set].classList.add("active");
	currentClass=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	$("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#class-button")[0].innerHTML = classes[set].name;
	
	$("#stat-level")[0].innerHTML = classes[set].level;
	$("#stat-vitality")[0].innerHTML = classes[set].vitality;
	$("#stat-attunement")[0].innerHTML = classes[set].attunement;
	$("#stat-strength")[0].innerHTML = classes[set].strength;
	$("#stat-dexterity")[0].innerHTML = classes[set].dexterity;
	$("#stat-resistance")[0].innerHTML = classes[set].resistance;
	$("#stat-intelligence")[0].innerHTML = classes[set].intelligence;
	$("#stat-faith")[0].innerHTML = classes[set].faith;
	$("#stat-humanity")[0].innerHTML = "0";
}

function hoverGift(hov) {
	$("#gift-description-box")[0].innerHTML = gifts[hov].description;
	// $("#class-image")[0].src="images/" + gifts[hov].name.toLowerCase() + ".webp";

}

function setGift(set) {
	for (var i=9;i<18;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[9+set].classList.add("active");
	currentGift=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	// $("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#gift-button")[0].innerHTML = gifts[set].name;
}

function hoverBody(hov) {
	$("#body-description-box")[0].innerHTML = bodies[hov].description;
	// $("#class-image")[0].src="images/" + gifts[hov].name.toLowerCase() + ".webp";

}

function setBody(set) {
	for (var i=18;i<27;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[18+set].classList.add("active");
	currentBody=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	// $("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#body-button")[0].innerHTML = bodies[set].name;
}

function hoverFace(hov) {
	$("#face-description-box")[0].innerHTML = faces[hov].description;
	// $("#class-image")[0].src="images/" + gifts[hov].name.toLowerCase() + ".webp";

}

function setFace (set) {
	for (var i=27;i<36;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[27+set].classList.add("active");
	currentFace=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	// $("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#face-button")[0].innerHTML = faces[set].name;
}

function hoverHair(hov) {
	$("#hair-description-box")[0].innerHTML = hairs[hov].description;
	// $("#class-image")[0].src="images/" + gifts[hov].name.toLowerCase() + ".webp";

}

function setHair (set) {
	for (var i=36;i<45;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[36+set].classList.add("active");
	currentHair=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	// $("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#hair-button")[0].innerHTML = hairs[set].name;
}

function hoverHCol(hov) {
	$("#hcol-description-box")[0].innerHTML = hcols[hov].description;
	// $("#class-image")[0].src="images/" + gifts[hov].name.toLowerCase() + ".webp";

}

function setHCol (set) {
	for (var i=45;i<54;i++) {
		$(".btn-secondary")[i].classList.remove ("active");
	}
	$(".btn-secondary")[45+set].classList.add("active");
	currentHCol=set;
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();

	// $("#class-image")[0].src="images/" + classes[currentClass].name.toLowerCase() + ".webp";
	$("#selections")[0].className="";
	$("#hcol-button")[0].innerHTML = hcols[set].name;
}

function finish () {
	if (currentClass != -1 && currentGift != -1 &&currentBody!=-1&&currentFace!=-1&&currentHair!=-1&&currentHCol!=-1) {
		var newSound = document.createElement("audio");
		newSound.volume=sfxVolume * masterVolume;
		newSound.src="sfx/cursor_ok.mp3";
		newSound.play();
		alert("The character data would be sent to the server or the user's computer.");
	} else {
		var newSound = document.createElement("audio");
		newSound.volume=sfxVolume * masterVolume;
		newSound.src="sfx/cursor_cancel.mp3";
		newSound.play();
		alert("Some fields have not been filled in.");
	}
}
function loadGame () {
	var newSound = document.createElement("audio");
	newSound.volume=sfxVolume * masterVolume;
	newSound.src="sfx/cursor_ok.mp3";
	newSound.play();
	alert("The game would start now, and data would be transferred.");
	
}

$("select").val("None");
$("#name").val("");



$("#volMaster")[0].value = 1;
masterVolume = 1;
if (localStorage.getItem("masterVolume") != null){
	$("#volMaster")[0].value=parseFloat(localStorage.getItem('masterVolume'));
	masterVolume = parseFloat(localStorage.getItem('masterVolume'));
}

$("#volEffects")[0].value = 1;
sfxVolume = 1;
if (localStorage.getItem("effectVolume") != null){
	$("#volEffects")[0].value=parseFloat(localStorage.getItem('effectVolume'));
	sfxVolume = parseFloat(localStorage.getItem('effectVolume'));
}

$("#volMusic")[0].value = 1;
musicVolume = 1;
if (localStorage.getItem("musicVolume") != null){
	$("#volMusic")[0].value=parseFloat(localStorage.getItem('musicVolume'));
	musicVolume = parseFloat(localStorage.getItem('musicVolume'));
}
$("#music")[0].volume=musicVolume;