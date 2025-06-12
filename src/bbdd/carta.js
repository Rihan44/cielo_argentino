// cartaData.js

const carta = [
  {
    id: 1,
    nombre: "Empanadas",
    descripcion: "Empanada tradicionales de...",
    precioMedia: 8,
    precioDocena: 16,
    imagen: "/images/empanadas1.jpg",
    // TODO AGREGAR TIPO DE EMPANADA
    categoria: "salado",
    type: 2,
    // is_multiple: true,
    multiple_select: [
      {
        nombre: 'Ravioli',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta1.jpg"
      },
      {
        nombre: 'Cannelloni ',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta2.jpg"
      },
      {
        nombre: 'Fettuccine ',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta3.jpg"
      },
      {
        nombre: 'Gnocchi',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta4.jpg"
      }
    ],
  },
  {
    id: 2,
    nombre: "Pasta casera",
    descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
    // TODO METER IMAGENES DE PASTAS 
    imagen: ["/images/pasta1.jpg", "/images/pasta2.jpg", "/images/pasta3.jpg", "/images/pasta4.jpg"],
    categoria: "salado",
    type: 1,
    is_multiple: true,
    multiple_select: [
      {
        nombre: 'Ravioli',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta1.jpg"
      },
      {
        nombre: 'Cannelloni ',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta2.jpg"
      },
      {
        nombre: 'Fettuccine ',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta3.jpg"
      },
      {
        nombre: 'Gnocchi',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 5,
        imagen: "/images/pasta4.jpg"
      }
    ],
    salsa_type: [
      {
        nombre: 'Salsa parisien',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 2.5,
      },
      {
        nombre: 'Salsa boloñesa',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 2.5,
      },
      {
        nombre: 'Salsa carbonara',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 2.5,
      },
      {
        nombre: 'Salsa pesto',
        descripcion: "Pasta casera de cualquier tipo con la salsa que tu quieras",
        precio: 2.5,
      }
    ]
  },
  {
    id: 3,
    nombre: "Milanesa de pollo o ternera",
    descripcion: "Milanesas de pollo o ternera, se puede elegir a la napolitana pero lleva un cargo de 0,50 centimos",
    precio: 5.0,
    imagen: "/images/milanesa.jpg",
    categoria: "salado",
    type: 1,
    is_multiple: false,
  },
  {
    id: 4,
    nombre: "Locro",
    descripcion: "Guiso criollo con maíz, zapallo, porotos, chorizo y carne de cerdo.",
    precio: 8.0,
    imagen: "/images/locro.jpg",
    categoria: "salado",
    type: 1,
    is_multiple: false,
  },
  {
    id: 6,
    nombre: "Alfajor de Maicena",
    descripcion: "Clásico alfajor con dulce de leche y coco rallado.",
    precioMedia: 6,
    precioDocena: 12,
    imagen: "/images/alfajores.jpg",
    categoria: "dulce",
    type: 2,
    is_multiple: false,
  },
  {
    id: 7,
    nombre: "Facturas",
    descripcion: "Facturas de crema con dulce de leche o membrillo, se pueden pedir variadas o de un solo tipo",
    precioMedia: 6,
    precioDocena: 12,
    imagen: "/images/facturas.jpg",
    categoria: "dulce",
    type: 2,
    is_multiple: false,
  },
  {
    id: 8,
    nombre: "Pasta frola",
    descripcion: "Pastel de membrillo o dulce de batata, también se puede hacer mitad y mitad",
    precio: 2.0,
    imagen: "/images/pasta_frola.jpg",
    categoria: "dulce",
    type: 1,
    is_multiple: false,
  },
  {
    id: 9,
    nombre: "Pepas",
    descripcion: "Pastas tipicias argentinas, pueden ser de membrillo o de dulce de batata",
    precioMedia: 6,
    precioDocena: 12,
    imagen: "/images/pepas.jpg",
    categoria: "dulce",
    type: 2,
    is_multiple: false,
  }
];

export default carta;
