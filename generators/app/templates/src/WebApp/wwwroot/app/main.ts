import { browserDynamicPlatform } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

// // Extend Observable through the app
import 'rxjs/Rx';

browserDynamicPlatform()
    .bootstrapModule(AppModule)
    .catch(console.error.bind(console));