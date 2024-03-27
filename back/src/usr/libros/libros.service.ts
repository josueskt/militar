import { Injectable } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';

@Injectable()
export class LibrosService {

    constructor(private sql: SqlService) {

    }
    libro(id: string) {
        return this.sql.query(`select
    b.titulo ,
    b.year_of_publ ,
    b.isbn,b.codigo,
    c.nombre as categoria ,
    s.nombre as seccion,
    e.nombre as estante,
    t.nombre as tipo
    from item.book as b
    LEFT JOIN item.categoria as c
    ON b.fk_categoria = c.id_categoria 
    LEFT JOIN item.seccion as s
    ON b.fk_seccion=id_seccion
    LEFT JOIN item.estante as e 
    ON S.fk_estante=E.id_estante
    left join item.type_book as t 
    ON b.fk_type = t.id_type WHERE id_libro =$1`,[id])

    }


}
