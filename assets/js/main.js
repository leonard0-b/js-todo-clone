// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.
$(document).ready(function(){
  $("#add").click(function(){
    var listVal = $("#input-list").val();
    var listItem = $("#list-item li").clone();

    listItem.children("span.title").text(listVal);
    $("#list").append(listItem);

  })










})
