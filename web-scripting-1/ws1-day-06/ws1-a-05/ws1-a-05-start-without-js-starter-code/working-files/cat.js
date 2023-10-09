class Cat {
    constructor(name, image = "") {
        this.name = name;
        this.hunger = 10;
        this.thirst = 10;
        this.love = 10;
        this.image = image;
        this.life = true;
    }

    feed() {
        if(life === false){
            return;
        }
        if(food !== false && this.hunger < 10){
            this.hunger++;
            console.log('Yummy! Thank you for the food!');
            return;
        }else if(this.hunger >= 10){
            console.log('I\'m full');
            return;
        }else{
            this.hunger--;
        }

        if(this.hunger < 6 && this.hunger >= 3){
            console.log("I'm hungry");
        }else if(this.hunger < 3){
            console.log("I'm starving, please feed me");
        }else if(this.hunger === 0){
            console.log("I'm not going to make it");
        }else if(this.hunger < 0){
            console.log("I'm dead");
        }

    }
    drink(water) {
        if(life === false){
            return;
        }
        if(water !== false && this.thirst < 10){
            this.thirst++;
            console.log("Ah, refreshing! Thank you!");
            return;
        }else if(this.thirst >= 10){
            console.log('I don\'t need to drink.');
            return;
        }else{
            this.thirst--;
        }
        if(this.thirst < 6 && this.thirst >= 3){
            console.log("I'm thirsty");
        }else if(this.thirst < 3){
            console.log("I'm dehydrated, please give me water");
        }else if(this.thirst === 0){
            console.log("I'm not going to make it");
        }else if(this.thirst < 0){
            console.log("I'm dead");
            this.life = false;
        }
    }
    love(pet) {
        if(life === false){
            return;
        }
        if(pet !== false){
            this.love++;
            console.log('I love you! Prrrr!!!');
            return;
        }else{
            this.love--;
        }
        if(this.love < 8 && this.love >= 5){
            console.log("I need some love");
        }else if(this.love < 5){
            console.log("I feel unloved, please pet me");
        }else if(this.love < 2 && this.love > 0){
            console.log("I'm going to ignore you now");
        }else if(this.love < 0){
            console.log("I'm disowning you!");
        }
    }
}


