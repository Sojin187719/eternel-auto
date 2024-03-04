// Lire le contenu du fichier JSON
fetch('https://sojin187719.github.io/eternel-auto/data/cars.json')
    .then(response => response.json())
    .then(dataObject => {
        // Traiter les données obtenues
        dataObject.forEach(buildCarList);
    })
    .catch(error => {
        // Gérer les erreurs
        console.error(error);
    });

// Fonction pour construire la nouvelle liste
function buildCarList(item, index) {
    var name = capitalize(item.name);
    var price = item.price;


    // Créer la carte (card)
    var card = document.createElement('div');
    card.classList.add('card', 'card-compact', 'w-96', 'bg-base-100', 'shadow-xl');

    // Ajouter l'image à la carte
    var figure = document.createElement('figure');
    var img = document.createElement('img');
    img.src = "https://sojin187719.github.io/eternel-auto/data/" + name + '.png'; 
    img.alt = name;    
    img.classList.add('w-full', 'aspect-video');
    figure.appendChild(img);
    card.appendChild(figure);

    // Ajouter le corps de la carte
    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Titre de la carte
    var title = document.createElement('h2');
    title.classList.add('card-title');
    title.textContent = name; 
    cardBody.appendChild(title);

    // Description de la carte
    var description = document.createElement('p');
    description.textContent = "Prix de vente :  " + price + ' $';
    cardBody.appendChild(description);

    // Actions de la carte
    var cardActions = document.createElement('div');
    cardActions.classList.add('card-actions', 'justify-end');

    cardBody.appendChild(cardActions);
    card.appendChild(cardBody);

    document.getElementById('dataList').appendChild(card);
}



function capitalize(str){
    return str.charAt(0).toUpperCase()+str.slice(1);
  }
