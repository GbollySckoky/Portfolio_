import { useCallback } from 'react'

const GetAllContact = () => {
    const getAllContact = useCallback(async() => {
        try {
            const response = await fetch('https://gbollyportfolio-backend.up.railway.app/api/v1/contact/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },    
            })
            console.log('Response:', await response.json())
        }catch (error) {
            console.error('Error fetching contact:', error)
        }
    }, [])
  return { getAllContact}
}

export default GetAllContact