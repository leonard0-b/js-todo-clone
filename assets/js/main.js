// Creare una Todo-list in cui si possano aggiungere nuovi todo e rimuoverli.
// Rendiamo il tutto gradevole alla vista.

$(document).ready(function(){
  // creo funzione al click🐱‍👤
  $("#add").click(function(){
    // mi salvo il valore dell'input🐱‍👤
    var listVal = $("#input-list").val();
    $("#input-list").val(""); //ad ogni click il form torna bianco🐱‍👤
    // clono la lista che voglio ripetere🐱‍👤
    var listItem = $("#list-item li").clone();

    // seleziono i figli della lista con classe "title" e scrivo nello span il valore dell'input🐱‍👤
    listItem.children("span.title").text(listVal);
    // lo stampo nella sezione list🐱‍👤
    $("#list").prepend(listItem);

    // al click sullo span con classe "elimina"🐱‍👤
    $(".elimina").click(function(){
      // elimina il parente superiore (li)🐱‍👤
      $(this).parent().remove();
    })

    // al click su "modifica" il testo si nasconde e appare un form🐱‍👤
    $(".modifica").click(function(){
      // click su modifica si mostra il suo prev🐱‍👤
      $(this).prev().show();
      // si nasconde suo fratello con classe "title"🐱‍👤
      $(this).siblings(".title").hide();
      // il form prende il valore da modificare🐱‍👤
      $(this).siblings(".edit").val(listVal);

  })

    // dopo la modifica premendo invio la modifica è ultimata🐱‍👤
    listItem.children(".edit").keyup(function(e){
      if (e.which == 13) {
        var title = $(this).val();
        $(this).hide();
        $(this).siblings("span.title").text(title).show();
        listVal = title;
      }
    })
  })
})
