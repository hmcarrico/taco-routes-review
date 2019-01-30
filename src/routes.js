import React from 'react'
import {Route, Switch} from 'react-router-dom';
//Components
import BrowseDemTacos from './Components/BrowseDemTacos/BrowseDemTacos';
import TacoEspeciales from './Components/TacoEspeciales/TacoEspeciales';
import TacoMemes from './Components/TacoMemes/TacoMemes';


export default <Switch>
    <Route path='/especiales' component={TacoEspeciales} />
    <Route path='/memes' component={TacoMemes} />
    <Route path='/' component={BrowseDemTacos} />
</Switch>