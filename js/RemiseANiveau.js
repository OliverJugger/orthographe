$( document ).ready(function() {
    console.log( "ready!" );
});

$(".remiseANiveau").click(function() {
 console.log( "bonjour!" );
 var monText = "<span class='remiseANiveauText'>Le but de mon enseignement"
 	+ " est d'adapter le niveau et le rythme d’acquisition de chacun afin de garantir un apprentissage"
 	+ " ciblé et efficace. Que vous souhaitiez reprendre les bases de orthographe, ou "
 	+ "enrichir votre vocabulaire, ce site peut vous permettre de vous mettre en relation avec une enseignante"
 	+ "</p> spécialisée qui vous permettra d'atteindre votre objectif.</span>";
 $('.remiseANiveauText').hide().html(monText).fadeIn(3000);
});