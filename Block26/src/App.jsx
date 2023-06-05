import { useState } from 'react'
import React from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact'



function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  return (
    <>
    {selectedContactId ? (
      selectedContactId(setSelectedContactId)
    ) : (
    <ContactList />
    )}
    </>
  )
}

export default App
