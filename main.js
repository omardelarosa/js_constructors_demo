
var object_literal = {
    color: "blue",
    shape: "circle",
    name: "bobby the object"
}

var fish_literal = {
    name: "charlie",
    appetite_level: 10,
    color: "blue",
    species: "tigerfish"
}

function Fish(name,color,species) {
    var o = {
        name: name,
        appetite_level: 10,
        color: color,
        species: species
    }
    return o;
}

var susie_the_fish = new Fish("susie","gold","goldfish")
var jimmy_the_shark = new Fish("jimmy","gray","shark")

function Box(content_text,color) {
    var box = $('<div>')
    box.addClass('box');
    box.css('background-color',color);
    box.css('width','200px');
    box.css('height','200px');
    box.css('color','black');
    box.css('border','2px solid black');
    box.css('float','left');
    box.text(content_text);
    $('body').append(box);
    return box;
}

function Ghost(interval_duration,name) {
    var this_ghost = new Box('I am a ghost.  My name is '+name,'white');
    var ghost = {
        name: name,
        element: this_ghost,
        disappear: function(){
            this_ghost.hide(1000);
        },
        reappear: function(){
            this_ghost.show(1000);
        },
        disappear_reappear : function () {
             this.disappear();
             this.reappear();
        }
    }
    //creates a dis
    
    timer = setInterval(function(){
            ghost.disappear_reappear();
        },interval_duration)
    ghost.timer = timer

    return ghost
}
// var charlie_the_ghost = new Ghost(1000, "charlie")
// var tony_the_ghost = new Ghost(5000, "tony")


