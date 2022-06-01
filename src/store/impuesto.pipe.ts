import { Pipe } from "@angular/core";

@Pipe({
  name: "agregarImpuesto"
})

export class ImpuestoPipe {
  impuestoDefault: number = 10;

  transform(value: any, tasa?: any): number {
    let valor = Number.parseFloat(value);
    let tasaAplicada = tasa == undefined ? this.impuestoDefault : Number.parseInt(tasa)
    return valor + (valor * (tasaAplicada / 100));
  }
}
