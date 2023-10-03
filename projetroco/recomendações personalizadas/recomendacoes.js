// Objeto para armazenar as contagens de recursos
var contagemRecursos = {};

// Função para rastrear o uso de recursos
function rastrearRecurso(recurso) {
  if (contagemRecursos[recurso]) {
    contagemRecursos[recurso]++;
  } else {
    contagemRecursos[recurso] = 1;
  }
}

// Função para recomendar recursos com base nas contagens
function recomendar() {
  // Obter o recurso mais usado
  var recursoMaisUsado = Object.keys(contagemRecursos).reduce(function(a, b) {
    return contagemRecursos[a] > contagemRecursos[b] ? a : b;
  });

  // Exibir recomendação
  alert("Recomendação: Experimente o recurso " + recursoMaisUsado + "!");
}
rastrearRecurso('Curtir');
safada