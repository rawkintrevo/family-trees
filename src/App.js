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



const familyTreeData =  [{
      id : 1,
      name: "Parent 1",
      parents: null,
      children: [0,2],
      spouse: 2,
      formerSpouses: null,
      nonTraditionalChildren: [10]
    },
    {
      id : 2,
      name: "Parent 2",
      parents: null,
      children: [0,2],
      spouse: 1,
      formerSpouses: [3],
      nonTraditionalChildren: null
    },
    {
      id : 3,
      name: "Former Spouse 1",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: [2],
      nonTraditionalChildren: null
    },
    {
      id : 4,
      name: "Child 1",
      parents: [0,2],
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: null
    },
    {
      id : 5,
      name: "Child 2",
      parents: [0,2],
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: null
    },
    {
      id : 6,
      name: "Former Spouse 2",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: [0],
      nonTraditionalChildren: null
    },
    {
      id : 7,
      name: "Non-Traditional Child 1",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: null
    },
    {
      id : 8,
      name: "Non-Traditional Child 2",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: null
    },
    {
      id : 9,
      name: "Non-Traditional Child 3",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: null
    },
    {
      id : 10,
      name: "Non-Traditional Child 4",
      parents: null,
      children: null,
      spouse: null,
      formerSpouses: null,
      nonTraditionalChildren: [0]
    }
]


function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // handle user authentication state changes
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log(`user ${user.uid} logged in`)
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
          <Route path="/familytree" element={<FamilyTreeGraph db={db} familyTreeData={familyTreeData}/>} />
          <Route path="/media/:personId" element={<Media db={db} />} />
          <Route path="/upload" element={<MediaUpload db={db} />} />
          <Route path="/admin" element={<AdminPanel db={db} />} />
          <Route path="/dashboard" element={<UserDashboard db={db} user={currentUser} media={[]}/>} />
          <Route path="/search" element={<Search db={db} />} />
          <Route path="/notifications" element={<Notifications db={db} currentUser={currentUser} />} />
        </Routes>
      </Router>
  );
}

export default App;
