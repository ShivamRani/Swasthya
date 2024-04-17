
import React, { useEffect, useState } from 'react';
import "firebase/compat/database"; 

import firebase from 'firebase/compat/app'; 



const RealtimeDataComponent = () => {
  const [bpm, setBpm] = useState('');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyAYocxFjycTP-tpTVzG1wofgtGIUs9upqQ",
          authDomain: "swasthya-a10c5.firebaseapp.com",
          databaseURL: "https://swasthya-a10c5-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "swasthya-a10c5",
          storageBucket: "swasthya-a10c5.appspot.com",
          messagingSenderId: "812925461664",
          appId: "1:812925461664:web:e6656238a4163e64a195c5"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const database = firebase.database();
    const dataRef = database.ref('test/bpm');

    const onDataChange = (snapshot) => {
      const bpm = snapshot.val();
      setBpm(bpm);
    };

    dataRef.on('value', onDataChange);

    // Clean up the listener
    return () => {
      dataRef.off('value', onDataChange);
    };
  }, []);

  return (
    <div>
    
      <p id="myBPM">{bpm}</p>
    </div>
  );
};

export default RealtimeDataComponent;
