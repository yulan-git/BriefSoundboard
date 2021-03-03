# BriefSoundboard

Parcel bundler ==> comment ça fonctionne?

Structure HTML 
	Ajout des boutons manquants
	Ajout des balises audio avec id 
(Création de fonctions pour générer HTML grâce au JS)

Event Keydown pour déclencher un event en appuyant sur une touche du clavier
	agit à partir du document
	log de cet event

Création d’une fonction playAudio()
	Récupérer la touche pressée —> event.key
	Création tableau des touches nécessaires
	Comparaison entre touche pressé et valeurs du tableau
		lire le fichier audio —> play()
		remettre à zéro et redéclencher le fichier audio —> load()
		rajouter une classe —> function addClass()
		Retirer la classe quand son terminer function removeClass()	
