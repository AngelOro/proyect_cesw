import React, { Component } from 'react';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import '../styles/Main.css';
import {link,Link} from 'react-router-dom';

const Main = () => {//deja de ser un componente stateful no contiene {}
  // siempre se retorna un unico componente contenedor
  return (
    <>
      
      <Header />
      <MainContent />
      

    </>
  );
}

export default Main;