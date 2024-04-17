import { Injectable, UnauthorizedException,  } from '@nestjs/common';
import { SqlService } from 'src/sql/sql.service';
import { login } from './login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { MessageDto } from 'src/commons/mmesage.dto';

//import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class LoginService {
  private readonly jwtSecretKey = process.env.Key_Key;
  constructor(public sql: SqlService) {}
  async Login(datos: login) {
    try {
      const cedula = datos.cedula;
      const password = datos.password;
      const result = await this.sql.query(
        'SELECT u.id_user ,u.password,u.nombre ,r.nombre as rol  FROM users.user AS u INNER JOIN users.rol AS r ON u.fk_rol = r.id_rol where cedula = ($1);',
        [cedula],
      );

      if (result.length === 1) {
        const user = result[0];
       
           
        
          var passwordMatch = await bcrypt.compare(password, user.password);

        

        // Verificar la contraseña

        if (passwordMatch) {
          const token = jwt.sign(
            {
              id_user: user.id_user,
              
              nombre: user.nombre,
              nombre_rol: user.rol,
            },
            this.jwtSecretKey,
            { expiresIn: '3000h' }, // Configura la expiración del token
          );

        //   this.sql.query(
        //     'INSERT INTO users.sesion(fk_user,date) values($1,CURRENT_DATE)',
        //     [user.id_user],
        //   );

          return { token };
        } else {
         return new UnauthorizedException(new MessageDto('contraseña errónea'));        
        }

      } else {
        return new UnauthorizedException(new MessageDto('no existe el usuario'));        
      }
    } catch (error) {
      return new UnauthorizedException(new MessageDto(`Error: ${error} exeption`));      
    }
  }
}
