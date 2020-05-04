import React from 'react';
import './App.css';
import Layout from '../src/components/layout/layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <Layout>
        <BurgerBuilder/>
    </Layout>
  );
}

export default App;
