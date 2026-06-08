import React from 'react';

import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MyRoute from './MyRoute';

import Login from '../pages/login';
import Aluno from '../pages/aluno';
import Alunos from '../pages/alunos';
import Register from '../pages/register';
import Fotos from '../pages/fotos';
import Page404 from '../pages/Page404';

export default function Routes() {
  return (
      <Switch>
        <MyRoute exact path='/' component={Alunos} />
        <MyRoute exact path='/aluno/' component={Aluno} isPrivate/>
        <MyRoute exact path='/aluno/:id/edit' component={Aluno} isPrivate/>
        <MyRoute exact path='/fotos/:idAluno' component={Fotos} isPrivate/>
        <MyRoute exact path='/login/' component={Login} isPrivate={false}/>
        <MyRoute exact path='/register/' component={Register} isPrivate={false}/>
        <MyRoute path='*' component={Page404} />
      </Switch>
  );
}
