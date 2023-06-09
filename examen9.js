let autosImportados = require("./examen1");
const concesionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    return this.autos.find((auto) => auto.patente === patente) || null;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    return this.autos.filter(function (auto) {
      return !auto.vendido;
    });
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    return this.autos.filter((auto) => auto.vendido).map((auto) => auto.precio);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce(function (total, precio) {
      return total + precio;
    });
  },
  puedeComprar: function (auto, persona) {
    return (
      persona.capacidadDePagoTotal >= auto.precio &&
      persona.capacidadDePagoEnCuotas >= auto.precio / auto.cuotas
    );
  },
};
