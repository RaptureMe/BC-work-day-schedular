// This is jQuery method to ensure DOM is fully loaded before running
$(document).ready(function () {
  // This code is to bring in the current date through DayJS in proper format
  var currentDay = dayjs().format("MMMM D, YYYY");
  var currentDayElement = document.getElementById("currentDay");
  currentDayElement.textContent = currentDay;

  // you can add -1 for ex. after hour() to subtract the time back.
  var currentHour = dayjs().hour();
  console.log(currentHour);
  $(".time-block").each(function () {
    // Get the current ID for the time-block
    var timeBlockId = $(this).attr("id");
    // Check if there is localstorage for this ID
    var storedVal = localStorage.getItem(timeBlockId);
    var txtArea = $(this).find("textarea");
    txtArea.val(storedVal);
    // need to find the text area then append to that id text area
    // Get the time from the data-time attribute

    console.log(storedVal)
    var blockHour = parseInt($(this).attr("data-time"));

    // Check if we've moved past this time
    // this cycles through the times through Datatime on the HTML to see if its past, present or future
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
  function buttonClick(event) {
    // TODO: Create a variable that holds the clicked jquery button
    // This holds the time block info
    var clickedButton = $(event.target);

    var timeBlock = clickedButton.parents(".time-block");
    var timeBlockId = timeBlock.attr("id");

    var txtVal = timeBlock.find(".description").val();
    console.log(txtVal)

    localStorage.setItem(timeBlockId,txtVal)
    // TODO: Save the value of the text area into local storage
  }

  $(".saveBtn").on("click", buttonClick);
  
});
