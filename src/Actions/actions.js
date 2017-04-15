import firebase, { firebaseRef } from '../firebaseConfig/dbConfig';


export var startLogin = (email, pass)=>{
    return (dispatch, getState)=>{
        return firebase.auth().createUserWithEmailAndPassword(email, pass).then((result)=>{
            //console.log('Sign Up Successfull!', result);
        },(error)=>{
            console.log('Sign Up Unsuccessfull',error);
        });
    }
}

export var startSignIn = (email,pass)=>{
    return (dispatch, getState)=>{
        return firebase.auth().signInWithEmailAndPassword(email, pass).then((result)=>{
            console.log('Sign In Successfull', result);
        },(error)=>{
            console.log('Sign In Unsuccessfull',error);
        });
    }
}

export var onLogout = ()=>{
    return (dispatch, getState)=>{
        return firebase.auth().signOut().then(()=>{
            console.log('User Is Logged Out!');
        },(error)=>{
            console.log('Error Occurs');
        });
    }
}