// Cards

// Card Class
class Card {
    constructor(path, name, number){
        this.path = path;
        this.alt = name;
        this.number = number;
    }
}

// lando-calrissian.jpg
// Create 12 instances of the card class
const cards = [];
// Boba Fett
cards[0] = new Card('images/boba-fett.jpg', 'Boba Fett', 1);
cards[1] = new Card('images/boba-fett.jpg', 'Boba Fett', 1);
// C-3p0
cards[2] = new Card('images/c-3po.jpg', 'C-3PO', 2);
cards[3] = new Card('images/c-3po.jpg', 'C-3PO', 2);
// Darth Maul
cards[4] = new Card('images/darth-maul.jpg', 'Darth Maul', 3);
cards[5] = new Card('images/darth-maul.jpg', 'Darth Maul', 3);
// Darth Vader
cards[6] = new Card('images/darth-vader.jpg', 'Darth Vader', 4);
cards[7] = new Card('images/darth-vader.jpg', 'Darth Vader', 4);
// Lando Calrissian
cards[8] = new Card('images/lando-calrissian.jpg', 'Lando Calrissian', 5);
cards[9] = new Card('images/lando-calrissian.jpg', 'Lando Calrissian', 5);
// Princess Leia
cards[10] = new Card('images/princess-leia.jpg', 'Princess Leia', 6);
cards[11] = new Card('images/princess-leia.jpg', 'Princess Leia', 6);
