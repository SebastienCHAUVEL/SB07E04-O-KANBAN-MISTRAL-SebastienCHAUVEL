# MVC

## Controller

Le controller est le cerveau.
Lorsqu'il s'exécute, on sait déjà la page qui a été demandée.

On peut donc récupérer les données attendues en suivant ces étapes

1. récupérer les données fournies
    - /!\ NTUI
2. préparer les données nécessaires pour la page
    - requetes en BDD
    - récupérer des données dans un fichier
    - faire une requete API
    - faire des calculs
    - appeler un service ( du code rangé dans un autre module )
3. renvoyer une réponse
    - Server Side Rendering => HTML
    - Client Side Rendering => JSON

## Model

C'est lui qui représente les données de notre application dans le code js.

Pour récupérer les données de la BDD, soit :

- les requetes sont dans le Model ( Active Record )
- les requetes sont dans un autre module ( DataMapper )

## View

Utile surtout lorsque l'on fait du SSR. Ce sont les fichiers qui contiennent le HTML.

## Ajouter une page dans une architecture MVC

- Créer la route
- Créer la fonction du controller ( et un module si nécessaire )
- Créer un Model ( si nécessaire )
- Créer la vue associée ( pas nécessaire cette saison car on renvoit du JSON )
