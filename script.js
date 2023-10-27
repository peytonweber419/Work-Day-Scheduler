// Displays the current date
var todaysDate = dayjs().format('dddd, MMM D YYYY');
$ ("#currentDay").html(todaysDate);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

    // Creates the event listener for clicking the save button and adds the description to local storage.

    $ (".saveBtn") .click (function(){
      var id = $ (this) .parent() .attr("id");
      var task = $ (this) .siblings(".description") .val();
      localStorage.setItem(id, task);
    })

    // Refers to each time block and decides whether or not it is in the past present or future.
    
    $ (".time-block") .each (function(){
      var currentHour = dayjs().hour();
      var blockHour = parseInt($ (this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $ (this) .addClass ("past");
      }
      else if (blockHour === currentHour) {
        $ (this) .addClass ("present");
      }
      else {
        $ (this) .addClass ("future");
      }
    })

    // Creates a for loop that starts at the first time block and stops after the last.
    // Appends the hour and number of the hour to the page from local storage using getItem.

    for (var i = 9; i < 18; i++) {
      $ ("#hour-" + i + " .description") .val (localStorage.getItem("hour-" + i));
    }
  });
  