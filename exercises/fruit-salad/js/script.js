

"use strict";

let fruits = $('.fruits span');
//let $salad = $.makeArray(document.getElementsByClassName('.fruit')); 


/*
var posx = Math.floor((Math.random() * 100) + 1);
var posy = Math.floor((Math.random() * 200) + 1);

  $(document).ready(function() {
      $('.food').css({
          "position":'absolute',
          "left":posx+'px',
          "top":posy+'px',
      });
  });
*/

$('#solved-dialog').dialog( {
    autoOpen: false,
    buttons: {
        "I know.": function() {
        $(this).dialog('close');
        }
    }
});

// event to transform draggable leters
$('.fruit').one('mouseover', function(event) {
    $(this).toggleClass('fruit found');
  });
  
  // Let the user drag secret letters via a clone helper
$('.fruit').draggable({
    revert: 'invalid',
    helper: 'original',
    opacity: 0.5
});

//droppable zone for answer
$('#bowl').droppable({
    drop: function(event, ui) {
           ui.draggable.draggable('disable'); // prevents letter to be dragged more than once
        }
    });

$('#button').click(function() {
    if ($.contains(document, fruits[0])) {
        alert("yiha");
    };
});


    /*
    if ($(this).text() === fruits) {
        $('#solved-dialog').dialog('open');
    }*/
