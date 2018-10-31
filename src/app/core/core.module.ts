
import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFirestoreModule } from 'angularfire2/firestore';

//import { firebaseConfig } from '@env';

@NgModule({
  imports: [
    // module import order matters for NgModules
    CommonModule
    // Angular extensions
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFirestoreModule
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in AppModule only!');
    }
  }
}