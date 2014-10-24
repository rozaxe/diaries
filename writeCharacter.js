(function() {

	var Character = function(img, name, desc) {
		this.img = img
		this.name = name
		this.desc = desc
	}

	Character.prototype.getHTML = function(left) {
		return '<div class="img_' + (left ? 'right' : 'left') + '"><img src="./img/pnj/' + this.img + '.png" alt="Protagoniste" /><h1>' + this.name + '</h1><span>' + this.desc + '</span></div>'
	}

	var protagonistes = []

	protagonistes.push(new Character("Aventurier", "Henry Jones", "Voyageur intrépide, il a parcouru le monde en large et en travers, cherchant toujours de nouveaux défis à relever.<br />Expert en herpétologie il cherche désespérément à faire l'acquisition d'un bothrops atrox. Pourquoi faire me diriez-vous ?<br />L'avoir comme animal de compagnie bien sûr !"))

	protagonistes.push(new Character("Scientifique", "Faust Rob", "Faust Rob est un érudit scientifique. Surnommé Faus't, il étudie avec acharnement les météorites et autres bidules stellaires. <br />Convaincu de la vie extraterrestre, il milite grandement pour la reconnaissance et l'acceptation de celle-ci."))

	protagonistes.push(new Character("Fee", "Opera Salsifis", "En voici une fée bien remontée. Depuis toute petite, quand ses premières ailes sont sorties, miss Opera n'en fait qu'à sa tête. <br />Chantant toute gaiement d'une voix fluette, elle adore se balader en sautant à contre vent.<br />Parviendrez-vous à percer ses véritables pensées ?"))

	protagonistes.push(new Character("Aubergiste", "Iste Auberg", "Avoir les mains pleines de mélasse ? Transporter à mains nues des fûts débordants ? Servir un tonnelet à mains ferme ?<br />Rien ne lui fait peur ! Cette femme de main sait comment diriger son affaire. Ne cherchez pas à la voir main en l'air, vous vous retrouveriez mains liées."))

	protagonistes.push(new Character("Capitaine", "Nanmé Àlokoi", "Pour lui, mer et bateau ne font plus qu'un. Naît sur un chaland en expédition, il a grandis sur la mer.<br />Des gens se plaigne de mal de mer, lui se plaint de mal de terre. Il a voyagé de partout de monde, et connait tous les secrets de la mer. <br />Peut être vous ferra-t-il monter sur son bateau ?"))

	protagonistes.push(new Character("Forgeron", "Nint Dejahrdain", "Forgeron est son deuxième prénom. Questions ferrailles, y'a pas plus caler que Nint.<br />Cette épée résistera-t-elle à un troll ? Cette dague est-elle bien affûté ?<br />Rien ne saurait le faire ciller."))

	protagonistes.push(new Character("Soldat", "Arias Gardevoir", "Ayant perdu sa famille enfant, elle s'est jurée depuis ce jour de protéger quiconque lui demanderais.<br />Ce n'est donc pas étant que le jour de sa majorité elle se soit engagée dans la milice du royal, protégeant ainsi le royaume des brigands.<br />Vous viendra-t-elle en aide ?"))

	protagonistes.push(new Character("Solitaire", "Témis Flag", "Personne ne sait rien sur lui ou ses pensées."))

	var result = []

	var item = protagonistes[Math.floor(Math.random()*protagonistes.length)]

	result[0] = item

	do {
		item = protagonistes[Math.floor(Math.random()*protagonistes.length)]
	} while (item == result[0])

	result[1] = item

	do {
		item = protagonistes[Math.floor(Math.random()*protagonistes.length)]
	} while (item == result[0] || item == result[1])

	result[2] = item

	for (i = 0 ; i < 3 ; ++i) {
		div = document.querySelector("#protagonistes")
		div.innerHTML = div.innerHTML + result[i].getHTML(i == 1)
	}

})()
