function editarTitulo(id) {
    var span = document.getElementById(id);
    var titulo = span.textContent.trim();

    var input = document.createElement("input");
    input.type = "text";
    input.value = "";

    // Almacenar el valor anterior del título
    var tituloAnterior = titulo;

    span.innerHTML = "";
    span.appendChild(input);

    input.focus();

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        var nuevoTitulo = input.value.trim();
        var nuevoSpan = document.createElement("span");

        // Restaurar el título anterior si el nuevo título está vacío
        if (nuevoTitulo === "") {
          nuevoTitulo = tituloAnterior;
        }

        nuevoSpan.textContent = nuevoTitulo;
        span.innerHTML = "";
        span.appendChild(nuevoSpan);
      }
    });

    input.addEventListener("blur", function () {
      var nuevoTitulo = input.value.trim();
      var nuevoSpan = document.createElement("span");

      // Restaurar el título anterior si el nuevo título está vacío
      if (nuevoTitulo === "") {
        nuevoTitulo = tituloAnterior;
      }

      nuevoSpan.textContent = nuevoTitulo;
      span.innerHTML = "";
      span.appendChild(nuevoSpan);
    });
  }