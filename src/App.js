import React from 'react';
import {Route, Switch} from "react-router-dom";
import Layout from './components/Layout/Layout';
import Contacts from './containers/Contacts/Contacts';
import NewContact from './components/NewContact/NewContact';

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Contacts} />
        <Route path="/contacts/:id/edit" exact component={NewContact}/>
        <Route path="/contacts" component={Contacts} />
        <Route path="/new-contact" exact component={NewContact}/>
        <Route render={() => <h1>Not found</h1>}/>
      </Switch>
    </Layout>
);

export default App;