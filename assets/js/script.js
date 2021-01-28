var tasks = {};

var saveTasks = function() {
localStorage.setItem("tasks", JSON.stringify(tasks));
};
  

$(".list-group").on("click", "p", function() {
    var text = $(this)
    .text()
    .trim();
    var textInput = $("<textarea>")
  .addClass("form-control")
  .val(text);

  $(this).replaceWith(textInput);

  textInput.trigger("focus");

});

// editable field was un-focused
$(".list-group").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  
    // get status type and position in the list
    var status = $(this)
      .closest(".list-group")
      .attr("id")
      .replace("list-", "");
    var index = $(this)
      .closest(".list-group-item")
      .index();
  
    // update task in array and re-save to localstorage
    tasks[status][index].text = text;
    saveTasks();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(taskP);
  });
