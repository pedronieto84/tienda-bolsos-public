import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ProductosComponent } from './pages/productos/productos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PasarelaComponent } from './pages/pasarela/pasarela.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const config = {
  apiKey: 'AIzaSyAvZhm3aJT2DdF3Wy4HFfsYlNbEJzMN104',
  authDomain: 'tienda-bolsos.firebaseapp.com',
  projectId: 'tienda-bolsos',
  storageBucket: 'tienda-bolsos.appspot.com',
  messagingSenderId: '1020550770465',
  appId: '1:1020550770465:web:2c74126da53cd1cc471860',
  measurementId: 'G-SRHJ03BNQY',
};
@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ContactoComponent,
    PasarelaComponent,
    DetalleProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserAnimationsModule, // firestore,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
