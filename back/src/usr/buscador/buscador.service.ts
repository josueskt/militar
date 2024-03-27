import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class BuscadorService {
  constructor(private sql: SqlService) { }

  async estantes() {
    return await this.sql.query('select * from  item.estante')
  }

  async secion(id_estante: string) {
    return await this.sql.query('select * FROM item.seccion where fk_estante = $1', [id_estante])
  }
  async buscador(busado: string, seccion: string) {
    let res = []
    if (seccion) {
      res = await this.sql.query('select titulo , id_libro FROM item.book WHERE fk_seccion = $1', [seccion])

    }

    if (!res[0]) {
      res = await this.sql.query('select titulo , id_libro FROM item.book WHERE LOWER(codigo) = LOWER($1)', [busado])
    }

    if (!res[0]) {

      res = await this.sql.query('select titulo , id_libro FROM item.book WHERE LOWER(isbn) = LOWER($1)', [busado])

    }
    if (!res[0]) {
      res = await this.sql.query('select titulo , id_libro FROM item.book WHERE LOWER(titulo) LIKE LOWER($1)', [`%${busado}%`])

    }


    return res
  }

}
