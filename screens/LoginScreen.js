import { View } from 'react-native'


// const LoginScreen = () => {
//   const { user} = useAuth()
//   console.log(user)
//   return (
//     <View>
//       <Text>LoginScreen</Text>
//     </View>
//   )
// }

// export default LoginScreen

import React, { useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import {  GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { Text,Button } from 'react-native';
import {  auth } from '../firebase'


// WebBrowser.maybeCompleteAuthSession();

// export function App() {

//   const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
//     {
//       clientId: '346757682722-lh9hrrjc5au1qi0rpd55f9qkul6894cq.apps.googleusercontent.com',
//     },
//   );

//   React.useEffect(() => {
//     if (response?.type === 'success') {
//       const { id_token } = response.params;
//       // const auth = getAuth();
//       const credential = GoogleAuthProvider.credential(id_token);
//       signInWithCredential(auth, credential);
//     }
//   }, [response]);

//   return (
//     <Button
//       disabled={!request}
//       title="Login"
//       onPress={() => {
//         promptAsync();
//       }}
//     />
//   );
// }

const LoginScreen = ()=>{
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '346757682722-lh9hrrjc5au1qi0rpd55f9qkul6894cq.apps.googleusercontent.com',
    },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // const auth = getAuth();
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  },[response])

  return (
    <View>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />

      <Text>LoginScreen</Text>
    </View>
    
  );

}

export default LoginScreen