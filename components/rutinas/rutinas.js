function iniciarRutinas(idTabla) {
  var registrosMusculos = {}; // Registro de los músculos seleccionados
  var registrosEjercicios = {}; // Registro de los ejercicios seleccionados por cada músculo

  // Función para actualizar la visibilidad del botón "Agregar Fila"
  function actualizarBotonAgregar(idTabla) {
    var numFilas = $("#" + idTabla + " tbody tr").length;
    if (numFilas >= 9) {
      $("#" + idTabla + " .btn-agregar-fila").hide();
    } else {
      $("#" + idTabla + " .btn-agregar-fila").show();
    }
  }

  // Función para agregar una fila a la tabla
  window.agregarFila = function (idTabla) {
    var numFilas = $("#" + idTabla + " tbody tr").length;
    if (numFilas < 9) {
      var nuevaFila = $(
        "<tr>" +
          "<td>" +
          '<div class="btn-group" role="group">' +
          '<button type="button" class="btn tren-toggle" data-tren="Superior">Sup.</button>' +
          '<button type="button" class="btn tren-toggle" data-tren="Inferior">Inf.</button>' +
          "</div>" +
          "</td>" +
          "<td>" +
          '<select class="form-control muscle-select">' +
          '<option value="">Selecciona un tren...</option>' +
          "</select>" +
          "</td>" +
          "<td>" +
          '<select class="form-control exercise-select">' +
          '<option value="">Selecciona un músculo...</option>' +
          "</select>" +
          "</td>" +
          '<td><input type="text" class="form-control series-input" maxlength="2"></td>' +
          '<td><input type="text" class="form-control repetitions-input" maxlength="2"></td>' +
          '<td><button class="btn btn-sm eliminar-fila"><i class="bi bi-trash"></i></button></td>' +
          "</tr>"
      );
      $("#" + idTabla + " tbody").append(nuevaFila);
    } else {
      alert("No es producente hacer más de 8 ejercicios en la misma sesión.");
    }
    actualizarBotonAgregar(idTabla);
  };

  // Agregar filas predeterminadas
  for (var i = 0; i < 5; i++) {
    agregarFila(idTabla);
  }

  // Evento de clic en el botón "Agregar Fila"
  $(document).on("click", "#agregarFila" + idTabla, function () {
    agregarFila("rutinas" + idTabla);
  });

  // Evento de clic en el botón "Eliminar Fila"
  $(document).on("click", "#rutinas" + idTabla + " .eliminar-fila", function () {
    var numFilas = $("#rutinas" + idTabla + " tbody tr").length;
    if (numFilas > 3) {
      var $row = $(this).closest("tr");
      var muscle = $row.find(".muscle-select").val();
      var exercise = $row.find(".exercise-select").val();
      // Eliminar el registro del músculo y ejercicio seleccionados
      if (registrosMusculos[muscle]) {
        registrosMusculos[muscle]--;
      }
      if (registrosEjercicios[exercise]) {
        registrosEjercicios[exercise]--;
      }
      $row.remove();
      actualizarBotonAgregar("rutinas" + idTabla);
    } else {
      alert("No es producente hacer solo 2 ejercicios en un día.");
    }
  });

  // Evento de cambio en el selector de músculos
  $(document).on("change", "#rutinas" + idTabla + " .muscle-select", function () {
    var muscle = $(this).val();
    var $exerciseSelect = $(this).closest("tr").find(".exercise-select");
    // Limpiar opciones anteriores
    $exerciseSelect.empty();
    // Agregar opciones de ejercicios dependiendo del músculo seleccionado
    if (muscle === "Pectorales") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Press Banca">Press Banca</option>');
      $exerciseSelect.append('<option value="Press Inclinado con Mancuernas">Press Inclinado con Mancuernas</option>');
      $exerciseSelect.append('<option value="Aperturas">Aperturas</option>');
      $exerciseSelect.append('<option value="Flexiones">Flexiones</option>');
    } else if (muscle === "Tríceps") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Fondos">Fondos</option>');
      $exerciseSelect.append('<option value="Press Frances">Press Frances</option>');
      $exerciseSelect.append('<option value="Extensión de codo en polea">Extensión de codo en polea</option>');
      $exerciseSelect.append('<option value="Extensión de codo trasnuca">Extensión de codo trasnuca</option>');
    } else if (muscle === "Delt.Anterior") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Press Militar con Barra">Press Militar con Barra</option>');
      $exerciseSelect.append('<option value="Press Militar con Mancuernas">Press Militar con Mancuernas</option>');
      $exerciseSelect.append('<option value="Elevaciones Frontales">Elevaciones Frontales</option>');
    } else if (muscle === "Dorsales") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Dominadas">Dominadas</option>');
      $exerciseSelect.append('<option value="Remo con Barra">Remo con Barra</option>');
      $exerciseSelect.append('<option value="Jalón al Pecho">Jalón al Pecho</option>');
      $exerciseSelect.append('<option value="Remo en Polea">Remo en Polea</option>');
      $exerciseSelect.append('<option value="Pull Over">Pull Over</option>');
      $exerciseSelect.append('<option value="Jalón/Dominada Supinas">Jalón/Dominada Supinas</option>');
      $exerciseSelect.append('<option value="Jaló/Dominada Neutras">Jalón/Dominada Neutras</option>');
    } else if (muscle === "Bíceps") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Jalón/Dominada Supinas">Jalón/Dominada Supinas</option>');
      $exerciseSelect.append('<option value="Curl con Barra Z">Curl con Barra Z</option>');
      $exerciseSelect.append('<option value="Curl Inclinado">Curl Inclinado</option>');
      $exerciseSelect.append('<option value="Curl Martillo">Curl Martillo</option>');
      $exerciseSelect.append('<option value="Curl Pedicador">Curl Pedicador</option>');
    } else if (muscle === "Trapecios") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Elevaciones de hombros">Encogimiento de hombros</option>');
    } else if (muscle === "Delt.Posterior") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Remo T">Remo T</option>');
      $exerciseSelect.append('<option value="Remo al pecho en polea">Remo al pecho en polea</option>');
      $exerciseSelect.append('<option value="Jalón a la Cara">Jalón a la Cara</option>');
    } else if (muscle === "Antebrazo") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Flex. de muñeca palma arriba">Flex. de muñeca palma arriba</option>');
      $exerciseSelect.append('<option value="Flex. de muñeca palma abajo">Flex. de muñeca palma abajo</option>');
      $exerciseSelect.append('<option value="Colgarse de la Barra">Colgarse de la Barra</option>');
      $exerciseSelect.append('<option value="Enrollar Cuerda">Enrollar Cuerda</option>');
    } else if (muscle === "Delt.Lateral") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Elev. Lat. con Mancuerna">Elev. Lat. con Mancuerna</option>');
      $exerciseSelect.append('<option value="Elev. Lat. con Polea">Elev. Lat. con Polea</option>');
    } else if (muscle === "Glúteos") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Hip Thrust">Hip Thrust</option>');
      $exerciseSelect.append('<option value="Empuje de Cadera con Polea">Empuje de Cadera con Polea</option>');
      $exerciseSelect.append('<option value="Patada de Glúteo">Patada de Glúteo</option>');
    } else if (muscle === "Cuádriceps") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Sentadilla Libre">Sentadilla Libre</option>');
      $exerciseSelect.append('<option value="Sentadilla Hack">Sentadilla Hack</option>');
      $exerciseSelect.append('<option value="Extensión de Cuádricep">Extensión de Cuádricep</option>');
      $exerciseSelect.append('<option value="Zancadas">Zancadas</option>');
    } else if (muscle === "Isquiotibiales") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Peso Muerto Rumano">Peso Muerto Rumano</option>');
      $exerciseSelect.append('<option value="Peso Muerto Convencional">Peso Muerto Convencional</option>');
      $exerciseSelect.append('<option value="Curl Femoral Acostado">Curl Femoral Acostado</option>');
      $exerciseSelect.append('<option value="Curl Femoral Sentado">Curl Femoral Sentado</option>');
    } else if (muscle === "Abductor") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Abductores en Máquina">Abductores en Máquina</option>');
      $exerciseSelect.append('<option value="Abductores en Polea">Abductores en Polea</option>');
    } else if (muscle === "Gemelos") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Elavación de Talón (de pie)">Elavación de Talón (de pie)</option>');
      $exerciseSelect.append('<option value="Elavación de Talón (sentado)">Elavación de Talón (sentado)</option>');
    }
    else if (muscle === "Abdominales") {
      $exerciseSelect.append('<option value="">Selecciona un ejercicio...</option>');
      $exerciseSelect.append('<option value="Elevación de Piernas">Elevación de Piernas</option>');
      $exerciseSelect.append('<option value="Crunch en Polea">Crunch en Polea</option>');
      $exerciseSelect.append('<option value="Crunch Lateral">Crunch Lateral</option>');
    }
  });

  // Evento de cambio en el botón "Tren"
  $(document).on("click", "#rutinas" + idTabla + " .tren-toggle", function () {
    var tren = $(this).data("tren");
    var $muscleSelect = $(this).closest("tr").find(".muscle-select");
    // Limpiar opciones anteriores
    $muscleSelect.empty();
    // Agregar opciones dependiendo del tren seleccionado
    if (tren === "Superior") {
      $muscleSelect.append('<option value="">Selecciona...</option>');
      $muscleSelect.append('<option value="Pectorales">Pectorales</option>');
      $muscleSelect.append('<option value="Tríceps">Tríceps</option>');
      $muscleSelect.append('<option value="Delt.Anterior">Delt.Anterior</option>');
      $muscleSelect.append('<option value="Dorsales">Dorsales</option>');
      $muscleSelect.append('<option value="Bíceps">Bíceps</option>');
      $muscleSelect.append('<option value="Trapecios">Trapecios</option>');
      $muscleSelect.append('<option value="Delt.Posterior">Delt.Posterior</option>');
      $muscleSelect.append('<option value="Antebrazo">Antebrazo</option>');
      $muscleSelect.append('<option value="Delt.Lateral">Delt.Lateral</option>');
    } else if (tren === "Inferior") {
      $muscleSelect.append('<option value="">Selecciona...</option>');
      $muscleSelect.append('<option value="Glúteos">Glúteos</option>');
      $muscleSelect.append('<option value="Cuádriceps">Cuádriceps</option>');
      $muscleSelect.append('<option value="Isquiotibiales">Isquiotibiales</option>');
      $muscleSelect.append('<option value="Abductor">Abductor</option>');
      $muscleSelect.append('<option value="Gemelos">Gemelos</option>');
    }

    // Restablecer el selector de ejercicios
    var $exerciseSelect = $(this).closest("tr").find(".exercise-select");
    $exerciseSelect.empty().append('<option value="">Seleccione un músculo...</option>');

    // Remover la clase "active" de todos los botones del grupo
    $(this).siblings().removeClass("active");
    // Agregar la clase "active" al botón que fue clickeado
    $(this).addClass("active");
  });

  // Limitar la selección de ejercicios y músculos
  $(document).on("change", ".exercise-select", function () {
    var muscle = $(this).closest("tr").find(".muscle-select").val();
    var exercise = $(this).val();
    if (!registrosEjercicios[muscle]) {
      registrosEjercicios[muscle] = {};
    }
    if (!registrosEjercicios[muscle][exercise]) {
      registrosEjercicios[muscle][exercise] = 0;
    }
    registrosEjercicios[muscle][exercise]++;
    if (registrosEjercicios[muscle][exercise] > 2) {
      alert("No puedes seleccionar más de 2 veces el mismo ejercicio.");
      $(this).val("");
    }
  });

  $(document).on("change", ".muscle-select", function () {
    var muscle = $(this).val();
    if (!registrosMusculos[muscle]) {
      registrosMusculos[muscle] = 0;
    }
    registrosMusculos[muscle]++;
    if (registrosMusculos[muscle] > 4) {
      alert("No puedes hacer más de 4 ejercicios para el mismo músculo.");
      $(this).val("");
    }
  });
}

// Iniciar las rutinas para cada tabla
for (var i = 1; i <= 6; i++) {
  iniciarRutinas(i);
}

iniciarRutinas("rutinas1");
iniciarRutinas("rutinas2");
iniciarRutinas("rutinas3");
iniciarRutinas("rutinas4");
iniciarRutinas("rutinas5");
iniciarRutinas("rutinas6");
