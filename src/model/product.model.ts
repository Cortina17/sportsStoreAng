export class Product {

  //es como un POJO de java
  //los argumentos con visibilidad public, son considerados atributos
  //nombre?--> es opcional (se colocan al final del constructor)

  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string,
    public description?: string,
  ) {

  }
}
