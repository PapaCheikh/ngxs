import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
//import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { provideHttpClient, HttpClientModule, withFetch } from '@angular/common/http';
import { ProductState } from './Core/store/states/ProductState';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      NgxsModule.forRoot([ProductState]),
      //NgxsReduxDevtoolsPluginModule.forRoot()
    ),
    provideHttpClient(
      withFetch(),
    ),
  ]
};
