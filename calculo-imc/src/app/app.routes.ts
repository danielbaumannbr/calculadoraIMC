import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Imc } from './imc/imc';
import { Teste } from './teste/teste';

export const routes: Routes = [
    {path:'imc',component: Imc},
    {path:'teste',component: Teste}
];
