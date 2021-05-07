import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos = [];
  constructor(private db: AngularFirestore, private router: Router) {}

  ngOnInit(): void {
    // conectamos con la base de datos
    this.db
      .collection('productos')
      .valueChanges()
      .subscribe((res) => {
        console.log('res', res);
        this.productos = res;
      });
  }
  navegar(i) {
    console.log('navegando', i);
    // diferencia navigaterByUrl, espera un string, Navigate: te permite pasar parametros
    // navegamos a una url dinamica
    // this.router.navigateByUrl(`detalle-producto/${i}`);
    this.router.navigate(['detalles-productos', i]);
  }
}
