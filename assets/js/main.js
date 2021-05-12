//Document ready Jquery
$(function () {
  // activa tooltip JQ Bootstrap
  $('[data-toggle="tooltip"]').tooltip();
  // Evento alertaenviar correo y oculta tooltip
  $("#enviarCorreo").on({
    click: function () {
      alert("El correo fue enviado correctamente...");
    },
    mouseleave: function () {
      $("#enviarCorreo").tooltip("hide");
    },
  });
  //   evento doble click  metodo children en Ingredientes y Preparacion
  var dblclikred = $("#detallereceta").children().find("h4");
  console.log("Muestra hijos id detallereceta--->", dblclikred);
  var h4Ingredientes = dblclikred.eq(0);
  var h4Preparacion = dblclikred.eq(1);
  h4Ingredientes.on({
    dblclick: function () {
      $(this).css("color", "red");
    },
    click: function () {
      $(this).css("color", "#373a3c");
    },
  });
  h4Preparacion.on({
    dblclick: function () {
      $(this).css("color", "red");
    },
    click: function () {
      $(this).css("color", "#373a3c");
    },
  });
  //toggle con titulo en recetas relacionadas
  var recetastoggle1 = $("#recetas").children().find("p");
  console.log("Muestra hijos id recetas--->", recetastoggle1);
  var p0 = recetastoggle1.eq(0);
  var p1 = recetastoggle1.eq(1);
  var p2 = recetastoggle1.eq(2);
  var recetastoggle2 = $("#recetas").children().find("h5");
  console.log("Muestra hijos id recetas--->", recetastoggle2);
  var titulo0 = recetastoggle2.eq(0);
  var titulo1 = recetastoggle2.eq(1);
  var titulo2 = recetastoggle2.eq(2);
  titulo0.on({
    click: function () {
      p0.fadeToggle("fast");
    },
    mouseenter: function () {
      titulo0.css("color", "#DC3545");
    },
    mouseleave: function () {
      titulo0.css("color", "#373a3c");
    },
  });
  titulo1.on({
    click: function () {
      p1.fadeToggle("fast");
    },
    mouseenter: function () {
      titulo1.css("color", "#DC3545");
    },
    mouseleave: function () {
      titulo1.css("color", "#373a3c");
    },
  });
  titulo2.on({
    click: function () {
      p2.fadeToggle("fast");
    },
    mouseenter: function () {
      titulo2.css("color", "#DC3545");
    },
    mouseleave: function () {
      titulo2.css("color", "#373a3c");
    },
  });
  //cerrar navegado cuando se haga click en un item del menu
  $(".navbar-nav>li>a").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });
});
