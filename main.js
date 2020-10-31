var canvas = new fabric.Canvas("myCanvas");

var player_x = 50;
var player_y = 50;

var player_object = "";
var block_object = "";

var block_height = 30;
var block_width = 30;

console.log("Press c for Captain America's left hand. ");

console.log("Press h for Hulk's face. ");

console.log("Press the shift key and h for Hulk's left hand. ");

console.log("Press 1 for Hulk's legs. ");

console.log("Press 2 for Hulk's right hand. ");

console.log("Press 3 for Hulk's body. ");

console.log("Press 4 for Iron Man's body. ");

console.log("Press i for Iron Man's face. ");

console.log("Press the shift key and i for Iron Man's left hand. ");

console.log("Press f for Iron Man's legs. ");

console.log("Press 5 for Iron Man's right hand. ");

console.log("Press b for Spider Man's body. ");

console.log("Press s for Spider Man's face. ");

console.log("Press the shift key and s for Spider Man's left hand. ");

console.log("Press 6 for Spider Man's legs. ");

console.log("Press 7 for Spider Man's right hand. ");

console.log("Press t for Thor's face. ");

console.log("Press the shift key and t for Thor's left hand. ");

console.log("Press r for Thor's right hand. ");

console.log("Press the shift key and p to increase the size of the superhero's. ");

console.log("Press the shift key and m to decrease the size of the superhero's. ");

function player_upload(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.set({top:player_y, left:player_x});
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        canvas.add(player_object);
    });
}

function block_upload(update){
    fabric.Image.fromURL(update, function(Img){
        block_object = Img;
        block_object.set({top:player_y, left:player_x});
        block_object.scaleToHeight(block_height);
        block_object.scaleToWidth(block_width);
        canvas.add(block_object);
    });
}

window.addEventListener("keydown", keys);

function keys(e){
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == '38'){
        console.log("The up arrow has been pressed. ");
        up();
    }

    if (keyPress == '40'){
        console.log("The down arrow has been pressed. ");
        down();
    }

    if (keyPress == '37'){
        console.log("The left arrow has been pressed. ");
        left();
    }

    if (keyPress == '39'){
        console.log("The right arrow has been pressed. ");
        right();
    }

    if (keyPress == '67'){
        console.log("c has been pressed. ");
        block_upload('captain_america_left_hand.png');
    }

    if (keyPress == '72'){
        console.log("The key h has been pressed. ");
        block_upload('hulk_face.png');
    }

    if (e.shiftKey == true && keyPress == '72'){
        console.log("The shift key and h have been pressed. ");
        block_upload('hulk_left_hand.png');
    }

    if (e.shiftKey == true && keyPress == '73'){
        console.log("The shift key and i have been pressed. ");
        block_upload('ironman_left_hand.png');
    }

    if (e.shiftKey == true && keyPress == '83'){
        console.log("The shift key and s have been pressed. ");
        block_upload('spiderman_left_hand.png');
    }

    if (e.shiftKey == true && keyPress == '84'){
        console.log("The shift key and t have been pressed. ");
        block_upload('thor_left_hand.png');
    }

    if (e.shiftKey == true && keyPress == '80'){
        console.log("p and the shift key is pressed. ");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (e.shiftKey == true && keyPress == '77'){
        console.log("m and the shift key is pressed. ");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if (keyPress == '49'){
        console.log("The key 1 has been pressed. ");
        block_upload('hulk_legs.png');
    }

    if (keyPress == '50'){
        console.log("The key 2 has been pressed. ");
        block_upload('hulk_right_hand.png');
    }

    if (keyPress == '51'){
        console.log("The key 3 has been pressed. ");
        block_upload('hulkd_body.png');
    }

    if (keyPress == '83'){
        console.log("The key s has been pressed. ");
        block_upload('spiderman_face.png');
    }

    if (keyPress == '73'){
        console.log("The key i has been pressed. ");
        block_upload('ironman_face.png');
    }

    if (keyPress == '52'){
        console.log("The key 4 has been pressed. ");
        block_upload('ironman_body.png');
    }

    if (keyPress == '84'){
        console.log("The key t has been pressed. ");
        block_upload('thor_face.png');
    }

    if (keyPress == '82'){
        console.log("The key r has been pressed. ");
        block_upload('thor_right_hand.png');
    }

    if (keyPress == '56'){
        console.log("The key 8 has been pressed. ");
        block_upload('thor_left_hand.png');
    }

    if (keyPress == '54'){
        console.log("The key 6 has been pressed. ");
        block_upload('spiderman_legs.png');
    }

    if (keyPress == '70'){
        console.log("The key f has been pressed. ");
        block_upload('ironman_legs.png');
    }

    if (keyPress == '53'){
        console.log("The key 5 has been pressed. ");
        block_upload('ironman_right_hand.png');
    }

    if (keyPress == '66'){
        console.log("The key b has been pressed. ");
        block_upload('spiderman_body.png');
    }

    if (keyPress == '55'){
        console.log("The key 7 has been pressed. ");
        block_upload('spiderman_right_hand.png');
    }
}

function up(){
    if (player_y >= 0){
        player_y = player_y - block_height;
        console.log("The block image height is " + block_height);
        console.log("When the up arrow is pressed the player's x = " + player_x + " & y = " + player_y);
        canvas.remove(player_object);
        player_upload();
    }
}

function down(){
    if (player_y <= 470){
        player_y = player_y + block_height;
        console.log("The block image height is " + block_height);
        console.log("When the down arrow is pressed the player's x = " + player_x + " & y = " + player_y);
        canvas.remove(player_object);
        player_upload();
    }
}

function left(){
    if (player_x >= 0){
        player_x = player_x - block_width;
        console.log("The block image width is " + block_width);
        console.log("When the left arrow is pressed the player's x = " + player_x + " & y = " + player_y);
        canvas.remove(player_object);
        player_upload();
    }
}

function right(){
    if (player_x <= 700){
        player_x = player_x + block_width;
        console.log("The block image width is " + block_width);
        console.log("When the right arrow is pressed the player's x = " + player_x + " & y = " + player_y);
        canvas.remove(player_object);
        player_upload();
    }
}