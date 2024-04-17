import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { routesAdmin } from './usr/user.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { routesUsr } from './admin/admin.routes';
import { provideToastr } from 'ngx-toastr';
import { loggerInter } from './auts/logger.interceptor';
import { AuthGuard } from './auts/auth.guard';
import { AuthInterceptor } from './auts/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideRouter(routesUsr),
  provideRouter(routesAdmin),
  provideHttpClient(withInterceptors([loggerInter])),
  AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  },
  provideToastr(),// Toastr providers
  
  ]
};
