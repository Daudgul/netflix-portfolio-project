import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { getAuth } from '@firebase/auth'




function ProfilleScreen() {
    const user = useSelector(selectUser)
    const firebaseAuth = getAuth()
    async function signOut() {
        try {
          await firebaseAuth.signOut();
          console.log('Successfully signed out');
        } catch (error) {
          console.log('Error signing out:', error);
        }
      }
      console.log(useSelector(selectUser),'hi')

  return (
    <div className='profileScreen'>
       <Nav/>
       <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile img" />
            <div className="profileScreen__details">
                <h2>{user?.email}</h2>
                <div className="profileScreen__plans">
                   <h3>Plans Current Plan: </h3>
                    <button onClick={() => signOut()} className="profileScreen__signOut">
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default ProfilleScreen