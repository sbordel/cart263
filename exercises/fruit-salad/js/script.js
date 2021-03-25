

"use strict";

let secret = 'Theremin';

$('#solved-dialog').dialog( {
    autoOpen: false,
    buttons: {
        "I know.": function() {
        $(this).dialog('close');
        }
    }
});

// event to transform draggable leters
$(`.secret`).one(`mouseover`, function(event) {
    $(this).addClass(`found`, 500);
  });
  
  // Let the user drag secret letters via a clone helper
  $(`.secret`).draggable({
    helper: `clone`
  });

//droppable zone for answer
$('#answer').droppable({
    drop: function(event, ui) {

        let letter = ui.draggable.text();
        $(this).append(letter);
        ui.draggable.draggable('disable'); // prevents letter to be dragged more than once
        ui.draggable.removeClass('found', 500); // letter in no longer highlighted once its been dragged
             // check if its correct
        if ($(this).text() === secret) {
            $('#solved-dialog').dialog('open');
        }
    }
});

