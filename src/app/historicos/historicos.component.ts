import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.component.html',
  styleUrls: ['./historicos.component.css'],
})
export class HistoricosComponent implements OnInit {
  entries = [
    {
      header: '1865',
      content: 'Se realiza la primera Lectura del Bando del Carnaval.',
    },
    {
      header: '1872',
      content: 'Surgen los salones burreros.',
    },
    {
      header: '1888',
      content: 'Se crea la figura del Rey Momo.',
    },
    {
      header: '1899',
      content:
        'Se crea el cargo de Presidente del Carnaval y una Junta Organizadora.',
    },
    {
      header: '1903',
      content: 'Se organiza la primera Batalla de Flores.',
    },
    {
      header: '1918',
      content:
        'Se elige por primera vez una Reina del Carnaval, resultando elegida Alicia Lafaurie Roncallo.',
    },
    {
      header: '1967',
      content: 'Se introduce la "Gran Parada" al carnaval.',
    },
    {
      header: '1969',
      content: 'Se crea el "Festival de Orquestas".',
    },
    {
      header: '1974	',
      content:
        'Se organiza la primera guacherna moderna por iniciativa de la cantautora Esther Forero.',
    },
    {
      header: '1992',
      content:
        'Se crea la Fundación Carnaval de Barranquilla, entidad que actualmente maneja la festividad.',
    },
    {
      header: '2001',
      content:
        'El carnaval de Barranquilla recibe el reconocimiento de «Patrimonio Cultural de la Nación» por el Congreso Nacional de Colombia.',
    },
    {
      header: '2003',
      content:
        'El carnaval es declarado Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad por la "Unesco".',
    },
    {
      header: '2006',
      content: 'Se organiza el primer Carnaval de las Artes.',
    },
    {
      header: '2013',
      content:
        'Se declaran diez danzas como patrimoniales y se busca su salvaguardia por medio de la producción de un disco compacto.',
    },
    {
      header: '2018',
      content:
        'Se incluye la figura de la Reina del Atlántico en representación de todos los municipios del departamento.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
