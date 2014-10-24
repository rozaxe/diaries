
/* Visionneuse de Screen */

vs = {
	addEvent: function (elem, event, func) {
		elem.addEventListener (event, func, false);
	},

	Path: "./img/screen/",
	
	Screen: [
		 "Altitude.png",
		 "Cabane.png",
		 "Chaumiere.png",
		 "Foret.png",
		 "Grotte.png",
		 "Interface.png",
		 "Manoir.png",
		 "Mines.png"
	],
	
	MoveUp: function (e) {
		vs.Id = (vs.Id + 1) % vs.Screen.length;
		vs.RefreshScreen ();
	},
	
	MoveDown: function (e) {
		vs.Id = (vs.Screen.length + vs.Id - 1) % vs.Screen.length;
		vs.RefreshScreen ();
	},
	
	LoadScreen: function (e) {
		document.getElementById ("visionneuse").src = e.target.src;
	},
	
	RefreshScreen: function () {
		var j = vs.Id;
		for (var i = 0 ; i < 3 ; ++i) {
			document.getElementById ("vs" + i).src = vs.Path + vs.Screen [j];
			j = (j + 1) % vs.Screen.length; 
		}
	},
	
	init: function () {
		document.getElementById ("visionneuse").src = vs.Path + vs.Screen [vs.Id];
		vs.RefreshScreen ();
		for (var i = 0 ; i < 3 ; ++i) {
			vs.addEvent (document.getElementById ("vs" + i), 'click', vs.LoadScreen);
		}
		vs.addEvent (document.getElementById ("top"), 'click', vs.MoveUp);
		vs.addEvent (document.getElementById ("btm"), 'click', vs.MoveDown);
	},
	
	Id: 0 // Id de la première image
};

vs.init ();
