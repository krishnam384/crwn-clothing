import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css';
import HomPage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SigninSignupPage from './pages/sign-in-and-sign-up-page/signin-and-signup-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';


class App extends React.Component {

  constructor(){
    super();

    this.state= {

      currentUser : null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            }
          });
        });
        
      }

      this.setState({currentUser: userAuth});

    })
  }

  componentWillUnmount() {

    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path="/" component={HomPage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SigninSignupPage} />
      </Switch>
      </div>
    );
  }
  
}

export default App;
