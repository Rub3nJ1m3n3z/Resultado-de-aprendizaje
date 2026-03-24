function filtrar(categoria, boton) {
      let productos = document.querySelectorAll(".producto");
      let botones = document.querySelectorAll(".btn");

      botones.forEach(btn => btn.classList.remove("activo"));

      boton.classList.add("activo");

      productos.forEach(producto => {
        if (categoria === "todos") {
          producto.style.display = "block";
        } else {
          producto.style.display = producto.classList.contains(categoria)
            ? "block"
            : "none";
        }
      });
    }