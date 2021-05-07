import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

// PAYPAL
import { render } from 'creditcardpayments/creditCardPayments';
@Component({
  selector: 'app-pasarela',
  templateUrl: './pasarela.component.html',
  styleUrls: ['./pasarela.component.scss'],
})
export class PasarelaComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(
    private location: Location,
    private _formBuilder: FormBuilder,
    private db: AngularFirestore
  ) {
    render({
      id: '#myPaypalButtons',
      currency: 'EUR',
      value: '10.00',
      onApprove: (details) => {
        alert('compra exitosa');
      },
    });
  }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      nombre: ['', Validators.required, Validators.maxLength(50)],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
    });
  }

  guardar() {
    //  extraemos datos del formulario
    const data = this.firstFormGroup.value;
    console.log('data', data);

    // insertar en la base de datos
    this.db.collection('pedidos').add(data);
  }
  volver() {
    // te lleva hacia la pagina anterior
    this.location.back();
  }
}
