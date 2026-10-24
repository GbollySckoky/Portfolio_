import { useCallback } from 'react'

interface Contact {
    name: string;
    email: string;
    phoneNumber: string;
    description: string;
} 
const PostContact = () => {
    const createContact = useCallback(async(payload: Contact) => {
        try {
            const response = await fetch('https://gbollyportfolio-backend.up.railway.app/api/v1/contact/', {
                
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })
            console.log('Response:', await response.json())
        }catch (error) {
            console.error('Error fetching contact:', error)
        }
    }, [])
  return { createContact}
}

export default PostContact