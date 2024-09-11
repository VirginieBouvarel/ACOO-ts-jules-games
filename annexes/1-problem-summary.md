# Expression de besoins
Les jeux de Jules fournit des frameworks que les créateurs de jeux peuvent utiliser pour créer des jeux de stratégie.
Contrairement aux jeux de tirs de type arcade et aux jeux qui comptent sur les fonctions audio et vidéo pour séduire le joueur,
nos jeux vont se concentrer sur des détails techniques de stratégie et de tactique.
Notre framework fournit une gestion de détail pour faciliter la construction d'un jeu spécifique, tout en supprimant 
le fardeau du codage répétitif de la conception de jeu.

Le framework du système de jeu (FSJ) va fournir le coeur de tous les jeux de Jules. 
Il se présentera sous la forme d'une bibliothèque de classes avec une API bien définie 
qui pourra être utilisée par toutes les équipes de développement de jeux de société de l'entreprise.

Le framework va fournir des capacités standard pour :
- définir et représenter une configuration de plateau de jeu
- définir des troupes et configurer des armées ou autres unités de combat
- déplacer les unités sur le plateau
- déterminer les mouvements autorisés
- diriger des batailles
- donner des informations sur les unités

Le FSJ va simplifier le travail de développement des jeux stratégiques avec plateau basés sur des tours de jeu, 
pour que les utilisateurs du FSJ puissent consacrer leur temps à implémenter concrètement les jeux.