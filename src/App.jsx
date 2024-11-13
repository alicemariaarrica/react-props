import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Card from "./components/Card/Card.jsx";

export default function App() {
  return <Card title="Titolo" content="Contenuto" />;
}

{/*Esercizio
Partendo dall'esercizio di ieri e dall'array di posts allegato, l'obiettivo è creare dinamicamente gli articoli all'interno della pagina.
I dati relativi a ciascun post dovranno essere passati come props ai componenti.
Ogni post ha una proprietà published, e gli articoli devono essere mostrati solo se questa proprietà è impostata su true.
Assegnate colori diversi ai tag dei posts, ad esempio: verde per html, rosa per css, etc…*/}