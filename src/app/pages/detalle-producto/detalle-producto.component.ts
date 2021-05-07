import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  idProducto;
  producto;
  constructor(private router: Router, private db: AngularFirestore) {}

  ngOnInit(): void {
    // obtenes la ruta.
    console.log('ruta,', this.router.url);
    // partimos la ruta y obtenemos la id del producto
    // el split lo parte por donde esta la / y buscamos la parte "2" seria 3
    this.idProducto = this.router.url.split('/')[2];
    // capturamos el producto, utilizando el id sacado de la url
    this.db
      .collection('productos')
      .doc(this.idProducto)
      .get()
      .toPromise()
      .then((productoDeLaBaseDeDatos) => {
        console.log('prducto', productoDeLaBaseDeDatos.data());
        this.producto = productoDeLaBaseDeDatos.data();
      });
  }

  volver() {
    this.router.navigateByUrl('productos');
  }

  pasarela() {
    this.router.navigateByUrl('pasarela');
  }
}
