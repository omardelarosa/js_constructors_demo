
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
    // this constructor returns a Box element of type jQuery element
    return box;
}

function Ghost(interval_duration,name) {
    // "this_ghost" is a new Object of type "Box"
    var box_element_of_ghost = new Box('I am a ghost.  My name is '+name,'white');
    var ghost = {
        name: name,
        // ghost.element -> jQuery of newly instantiated Box.
        element: box_element_of_ghost,
        disappear: function(){
            //takes the box element and calls plain old jQuery methods on it.
            box_element_of_ghost.hide(1000);
        },
        reappear: function(){
            //takes the box element and calls plain old jQuery methods on it.
            box_element_of_ghost.show(1000);
        },
        // "this" in this context refers to the "ghost" Object that we are making
        // right now in this very literal.
        disappear_reappear : function () {
            //makes "this" (i.e. the ghost object we are making) disappear then reappear
             this.disappear();
             this.reappear();
        }
    }

    ghost.age = 5000
    //creates a dis
    var timer = setInterval(function(){
            ghost.disappear_reappear();
        },interval_duration)

    ghost.timer = timer

    return ghost
}

$(function(){
    charlie_the_ghost = new Ghost(1000, "charlie")
    tony_the_ghost = new Ghost(5000, "tony")
})


