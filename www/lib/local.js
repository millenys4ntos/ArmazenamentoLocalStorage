var valor = 0;

$(document).on("click", "#Salvar", function(){
  localStorage.setItem(valor, $("#nome").val());
  valor++;
});

$(document).on("click", "#Buscar", function(){
  var pessoa = localStorage.getItem($("identificador").val());
  $("#Nome").val(pessoa);
    });