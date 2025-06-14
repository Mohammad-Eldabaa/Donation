// CreateUser.js
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import app from '../firebaseConfig';  // Import the initialized Firebase app
import store from '../redux/stor';
import { updateToken } from '../redux/reducers/User';

const auth = getAuth(app);  // Ensure you're passing the Firebase app instance here

export const CreateUser = async (fullName, email, password) => {
  try {
    // Create the user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // Update the user's profile with the display name
    await updateProfile(userCredential.user, {
      displayName: fullName,
    });

    // console.log('User created successfully:', userCredential.user);
    return userCredential.user;  // Return the created user
  } catch (error) {
    console.log(error)
    // Handle errors
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    } else {
      return {error: 'Something went wrong with your request.'};
    }
  }
};


export const LoginUser = async (email,password)=>{

  try{

    const response = await signInWithEmailAndPassword(auth,email,password)
    const token = await response.user.getIdToken()
    return {
      state: true,
      date:{
        displayName: response.user.displayName,
        email: response.user.email,
        token,
      }
    }
  }catch(error){
    console.log('erorrrrrrrrrrrrrr')
    return{
      state: false,
      error: error.message
    };

  }
}


export const userSignOut = async ()=>{
  await signOut(auth)
}


export const checkToken = async () => {
  try {
    let response = await auth.currentUser.getIdToken(true)
    console.log('We are updating token for you');
    store.dispatch(updateToken(response))
    console.log('the updated token is : ' + response)


  } catch (error) {
    return error;
  }
};