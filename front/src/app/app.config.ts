import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routesAdmin } from './usr/user.routes';
import { provideHttpClient } from '@angular/common/http';
import { routesUsr } from './admin/admin.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideRouter(routesUsr),
  provideRouter(routesAdmin),
  provideHttpClient()
  
  ]
};
