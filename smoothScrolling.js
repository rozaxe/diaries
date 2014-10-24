
/* Défilement  */

var ss = {
	// Add Event on All Navigator
	AddEvent: function (element, event, func) {
		if (element.attchEvent) {
			element.attachEvent ('on' + event, func);
		} else {
			element.addEventListener (event, func, true);
		}
	},
	
	SearchAnchor: function () {
		var allA = document.getElementsByTagName ('a');
		var sizeA = allA.length;
		for (var i = 0 ; i < sizeA ; ++i) {
			link = allA [i];
			if (link.href.indexOf ('#') != -1) {
				ss.AddEvent (link, 'click', ss.FindTarget);
			}
		}
	},

	Scroller: function (pos, dist) {
		var cpt = pos;
		var vitesse = ss.Step;
		if (dist < 0) {
			if (cpt > dist) {
				if (-(dist - cpt) < vitesse) vitesse = -(dist - cpt);
				window.scrollBy(0, -vitesse);
				cpt -= vitesse;
				ss.Timer = setTimeout(("ss.Scroller(" + cpt + "," + dist + ");"), 1);
			}
		} else {
			if (cpt < dist) {
				if ((dist - cpt) < vitesse) vitesse = (dist - cpt);
				window.scrollBy(0, vitesse);
				cpt += vitesse;
				ss.Timer = setTimeout(("ss.Scroller(" + cpt + "," + dist + ");"), 1);
			}
		}
	},
	
	FindTarget: function (e) {
	
		// Stop Timer
		clearTimeout (ss.Timer);
	
		// Find Original Element
		if (window.event) {
			origin = window.event.srcElement;
		} else if (e) {
			origin = e.target;
		} else return;
		// Check if there's an A tag
		if (origin.nodeName.toLowerCase () != 'a') return;
		// Search the corresponding name
		anchor = origin.hash.substr(2);
		
		// Find the A tag corresponding
		var allA = document.getElementsByTagName ('article');
		var target = null;
		for (var i = 0 ; i < allA.length ; ++i) {
			var link = allA [i];
			if (link.id && (link.id == anchor)) {
				var target = link;
				break;
			}
		}
		
		// Check if there's a corresponding
		if (!target) return;
		
		// Calculate Target Position
		var posY = 0;
		while (target != document.body && posY == 0) {	
			posY += target.offsetTop;
			target = target.parentNode;
		}
		
		// Calculate Destination
		var currentY = ss.GetCurrentY ();
		var destY = posY - currentY;
		ss.Scroller (0, destY);
		
		// And stop the actual click happening
		if (window.event) {
			window.event.cancelBubble = true;
			window.event.returnValue = false;
		} else if (e) {
			e.preventDefault();
			e.stopPropagation();
		}
		
	},
	
	// Get the Current position of the scroll
	GetCurrentY: function () {
		if (document.documentElement.scrollTop) {
		  return document.documentElement.scrollTop;
		} else if (window.pageYOffset) {
		  return window.pageYOffset;
		}
		return 0;
	},
	
	// The Scroll Speed : step/1ms
	Step: 13
};

ss.SearchAnchor ();
