import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

// Compiles the application with the JIT compiler and bootstraps the application's main module
// (AppModule) to run in the browser. The JIT compiler is a reasonable choice during the development
