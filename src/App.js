import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Authentication from './components/Authentication';
import FamilyTreeGraph from './components/FamilyTreeGraph';
import Media from './components/MediaComponent';
import MediaUpload from './components/MediaUpload';
import AdminPanel from './components/AdminPanel';
import UserDashboard from './components/UserDashboard';
import Search from './components/Search';
import Notifications from './components/Notifications';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCFLY2SQCK2ou9dNKqtOZiJgDqo-E1Rh-c",
  authDomain: "merlins-family-trees.firebaseapp.com",
  projectId: "merlins-family-trees",
  storageBucket: "merlins-family-trees.appspot.com",
  messagingSenderId: "61835131003",
  appId: "1:61835131003:web:ebd2c4878874648b088ade"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // handle user authentication state changes
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(`user ${user} logged in`)
      console.log(user)
      setCurrentUser(user);
    } else {
      console.log("App.js: setting user to null")
      setCurrentUser(null);
    }
  });

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Authentication/>}/>
          <Route path="/familytree" element={<FamilyTreeGraph db={db} />} />
          <Route path="/media/:personId" element={<Media db={db} />} />
          <Route path="/upload" element={<MediaUpload db={db} />} />
          <Route path="/admin" element={<AdminPanel db={db} />} />
          <Route path="/dashboard" element={<UserDashboard db={db} user={currentUser} />} />
          <Route path="/search" element={<Search db={db} />} />
          <Route path="/notifications" element={<Notifications db={db} currentUser={currentUser} />} />
        </Routes>
      </Router>
  );
}

export default App;
