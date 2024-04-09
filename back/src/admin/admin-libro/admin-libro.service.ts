import { Injectable } from '@nestjs/common';
import { libro } from '../interfaces/libro';
import { SqlService } from 'src/sql/sql.service';
import { error } from 'console';
import { MessageDto } from 'src/commons/mmesage.dto';

@Injectable()
export class AdminLibroService {

   constructor(private sql: SqlService) { }

   async historial(id: string) {
      return this.sql.query('SELECT p.id_prestamo, p.fecha_prestamo,p.fecha_entrega,p.observacion ,c.cedula,c.telefono,e.nombre as estado FROM tramites.prestamo as p  INNER JOIN users.clientes as c ON p.fk_cliente = c.cedula LEFT JOIN  tramites.estate as e  ON p.fk_estate =e.id_estate WHERE p.fk_libro = $1', [id])
   }
   async traer_todos(pagina:number,buscar:string) {


      const pageNumber = pagina; 
      const pageSize = 10; 
      const offset = (pageNumber - 1) * pageSize;

      const result = await this.sql.query(
         'select id_libro ,codigo,titulo from item.book where codigo like $3 order by id_libro LIMIT $1 OFFSET $2  ',[pageSize, offset ,`%${buscar}%`]
      );

      return result
   }
   async traer_por_id(id: string) {
      try {
         const res = await this.sql.query('SELECT * from item.book WHERE  id_libro = $1', [id])
         return res
      } catch { return error }


   }
   async eliminar(id: string) {
      try {

         await this.sql.query('DELETE FROM item.book WHERE  id_libro = $1', [id])
         return new MessageDto('eliminado correctamente')
      } catch { return error }


   }

   private async Editorial(editoriales: string) {
      let res
      res = await this.sql.query('select id from item.editorial where nombre = $1', [editoriales])
      if (!res[0]) {
         res = await this.sql.query('INSERT INTO  item.editorial(nombre)  values($1) returning id ', [editoriales])

      }


      return res[0].id
   }
   private async Autor(autor: string) {
      let res
      res = await this.sql.query('select id from item.autor where nombre = $1', [autor])
      if (!res[0]) {
         res = await this.sql.query('INSERT INTO  item.autor(nombre)  values($1) returning id ', [autor])

      }


      return res[0].id
   }
   private async Categoria(autor: string) {
      let res: { id_categoria: string }[]
      res = await this.sql.query('select id_categoria from item.categoria where nombre = $1', [autor])
      if (!res[0]) {
         res = await this.sql.query('INSERT INTO  item.categoria(nombre)  values($1) returning id_categoria ', [autor])
      }
      return res[0].id_categoria
   }
   private async Tipo(autor: string) {
      let res
      res = await this.sql.query('select id_type from item.type_book where nombre = $1', [autor])
      if (!res[0]) {
         res = await this.sql.query('INSERT INTO item.type_book(nombre) values($1) returning id_type', [autor]);
      }
      return res[0].id_type
   }
   async crear(libros: libro[]) {
      try {
         for await (let libro of libros) {
            let editorial: string = null
            let categoria: string = null
            let autor: string = null
            let tipo: string
            if (!libro.editorial) {
               libro.editorial = 'null'
            }

            const editorialPromise: Promise<string> = this.Editorial(libro.editorial)


            await editorialPromise.then((e) => {
               editorial = e

            })

            if (!libro.autor) {
               libro.autor = 'null'
            }

            const autorPromise: Promise<string> = this.Autor(libro.autor)

            await autorPromise.then((e) => {
               autor = e

            })
            if (!libro.categoria) {
               libro.categoria = 'null'
            }

            const categoriaPromise: Promise<string> = this.Categoria(libro.categoria)

            await categoriaPromise.then((e) => {
               categoria = e
            })


            if (!libro.tipo) {
               libro.tipo = 'null'
            }
            const tipoPromise: Promise<string> = this.Tipo(libro.tipo)

            await tipoPromise.then((e) => {
               tipo = e
               console.log(e)

            })
            await this.sql.query(
               `INSERT INTO item.book(
                  titulo,
                  year_of_publ,
                  isbn,
                  codigo,
                  cantidad,
                  tomo,
                  fk_type,
                  fk_seccion,
                  fk_categoria,
                  fk_autor,
                  fk_editorial)VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
               [libro.titulo, libro.year_of_publ, libro.isbn, libro.codigo, libro.cantidad, libro.tomo, tipo, libro.fk_seccion, categoria, autor, editorial]
            );



         }


      } catch (error) {
         return new MessageDto(error);
      } finally {
         return new MessageDto("creado exitosamente");

      }

   }

   // async editar(id:string ,libro:libro){

   //    try{
   //       await this.sql.query(`UPDATE item.book set  
   //       titulo =$1,
   //       year_of_publ=$2,
   //       isbn=$3,
   //       codigo=$4,
   //       cantidad=$5,
   //       fk_type=$6,
   //       fk_seccion=$7,
   //       fk_categoria=$8 
   //       Where id_libro =$9`,
   //       [libro.titulo,libro.year_of_publ,libro.isbn,libro.codigo,libro.cantidad,libro.fk_type,libro.fk_seccion,libro.fk_categoria,id]
   //       )

   //       return  new MessageDto("editado exitosamente");
   //    }catch{
   //       return error
   //    }


   // }
}

