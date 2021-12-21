import { enableProdMode } from '@angular/core'; 
// main.ts is a supporting
// file of index.html, which is used to import all the required 
//files for index.html
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; 
//AppModule class is 
//present in app.module.ts file which is present in app folder and exporting it. 
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
