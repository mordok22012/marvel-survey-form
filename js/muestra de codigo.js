function cargarCarreras() {
  var array = ["Sistemas", "Redes", "Electrica", "Industrial", "Electronica"];
  array.sort();
  addOptions("carrera", array);
}

function addOptions(domElement, array) {
  var selector = document.getElementsByName(domElement)[0];
  for (carrera in array) {
    var opcion = document.createElement("option");
    opcion.text = array[carrera];
    opcion.value = array[carrera].toLowerCase();
    selector.add(opcion);
  }
}

function cargarMaterias() {
  // Modifique los nombres de tus propiedas a minúsculas.
  var listaMaterias = {
    sistemas: [
      "Base de Datos",
      "Analisis de Sistemas I",
      "Redes Inalambricas",
      "Inteligtencia Artificial",
      "Ingenieria de Software",
    ],
    redes: [
      "Analisis de Señales",
      "Redes II",
      "Seguridad de la Informacion",
      "Calculo III",
      "Electricidad y Magnetismo",
    ],
    electrica: [
      "Fisica II",
      "Termodinamica",
      "Resistencia de Materiales",
      "Electronica Analogica I",
      "Ecuaciones Diferenciales",
    ],
    industrial: [
      "Fundamentos de Marketing",
      "Investigacion Operativa",
      "Estudio de Materiales",
      "Quimica Organica",
      "Ecuaciones Diferenciales",
    ],
    electronica: [
      "Circuitos Electricos",
      "Electronica Analogica II",
      "Fisica II",
      "Electronica Digital",
      "Analisis de Señales",
    ],
  };
  var carreras = document.getElementById("carrera");
  var materias = document.getElementById("materia");
  // La carrera seleccionada se convierte a minúsuculas para que podás buscarla tal cual en tu array de listaMaterias
  var carreraSeleccionada = carreras.value.toLowerCase();

  materias.innerHTML = '<option value="">Seleccione una Materia...</option>';

  if (carreraSeleccionada !== "") {
    // sistemas que es lo que seleccionaste, si es igual a sistemas en tu array listaMaterias
    carreraSeleccionada = listaMaterias[carreraSeleccionada];
    // Validamos que traiga el listado de materias, ya que sino te dará un error que no existe el método sort, porque no es un array sino un texto
    if (!!carreraSeleccionada.length) carreraSeleccionada.sort();

    carreraSeleccionada.forEach(function (materia) {
      let opcion = document.createElement("option");
      opcion.value = materia;
      opcion.text = materia;
      materias.add(opcion);
    });
  }
}

cargarCarreras();
