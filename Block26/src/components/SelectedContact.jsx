import React, { useEffect, useState } from "react"

 
const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState([]);


useEffect (() => {
    async function fetchAPI() {
        try {
            const response = await fetch(`https://jsonplace-univclone.herokuapp.com/users/${selectedContactId}`);
            const data  = await response.json();

            setContacts(result);
        } catch (error) {
            console.log(error)
        }
    }
    fetchAPI()
}, []);
return;
}


export default SelectedContact;