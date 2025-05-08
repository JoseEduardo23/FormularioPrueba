import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import {IonicModule} from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { addDoc, collection } from 'firebase/firestore';
@Component({
  selector: 'app-home',
  standalone:true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule,CommonModule,FormsModule,ReactiveFormsModule],
})

export class HomePage {
  formulario!: FormGroup
  constructor(private fb: FormBuilder, private firestore: Firestore) {}

  ngOnInit(){
    this.formulario = this.fb.group({
      nombre:[''],
      apellido:[''],
      edad:[''],
      fechaNacimiento:[''],
      ciudadOrigen:[''],
      email:[''],
      telefono:[''],
      direccion:[''],
      cedula:[''],
      estado:[''],
    })
  }

  async save(){
    const data = this.formulario.value;
    const ref = collection(this.firestore, 'formularios')
    await addDoc(ref, data)
    alert('Sus datos han sido registrados correctamente')
    this.formulario.reset();
  }

}
