import { Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { SqlService } from 'src/sql/sql.service';
import { MessageDto } from 'src/commons/mmesage.dto';
import { User } from '../interfaces/usuario';

@Injectable()
export class RegistroService {

    constructor(public sql: SqlService) { }

   
    async register(user:User) {
      const asaltos = 10;
      try {
       
          const existe = await this.sql.query(
            'Select id_user from users.user where cedula = $1',
            [user.id_user],
          );
          if (existe.length) {
           return  new MessageDto('Usuario ya existe');
          }
          if (!existe.length) {
            const salt = await bcrypt.genSalt(asaltos);
            const hashedPassword = await bcrypt.hash(user.password, salt);
            this.sql.query(
              'INSERT INTO users.user(nombre,password,cedula,fk_rol) values($1,$2,$3,$4)',
              [
                user.nombre,
                hashedPassword,
                user.id_user,
                1,//rol de el usuario aun pendiente 
                
              ],
            );
            
          }
        
        return new MessageDto('Usuario creado');
      } catch (error) {
        throw new NotFoundException(new MessageDto('Error al crear usuarios '+error));
      }
    }
  
   
  
  
    
  
  
    


    
}
