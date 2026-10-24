import { useState, type FormEvent } from "react"
import PostContact from "../../hooks/useGetAllContact"

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
    description: ''
}

const ContactInfo = () => {
    const {createContact} = PostContact()
    const [inputValue, setInputValue] = useState(initialState)

   const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }))

   }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data  = {
            name: inputValue.name,
            email: inputValue.email,
            phoneNumber: inputValue.phoneNumber,
            description: inputValue.description 
        }
        await createContact(data)
    }

  return (
      <div className="max-w-7xl mx-auto px-6">
        <h1 className='text-2xl md:text-3xl font-bold leading-tight mb-6 text-center'>Contact Information</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="name" className='text-sm font-medium'>Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        name='name' 
                        placeholder='Name' 
                        className='mt-2 border p-2 rounded-lg focus:outline-none focus:ring-0'
                        value={inputValue.name}
                        onChange={handleChange}
                     />
                </div>
                <div className='flex flex-col mb-2'>
                    <label htmlFor="email" className='text-sm font-medium'>Email</label>
                    <input 
                        type="email" 
                        id='email' 
                        name='email' 
                        placeholder='Email' 
                        className='mt-2 border p-2 rounded-lg focus:outline-none '
                        value={inputValue.email}
                        onChange={handleChange}
                     />
                </div>
                 <div className='flex flex-col mb-2'>
                    <label htmlFor="phone" className='text-sm font-medium'>Phone Number</label>
                    <input 
                        type="number" 
                        id='phone' 
                        name='phone' 
                        placeholder='Phone Number' 
                        className='mt-2 border p-2 rounded-lg focus:outline-none focus:ring-0'
                        value={inputValue.phoneNumber}
                        onChange={handleChange}
                     />
                </div>
                 <div className='flex flex-col mb-2'>
                    <label htmlFor="description" className='text-sm font-medium'>Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder='Description' 
                        className='mt-2 border p-2 rounded-lg focus:outline-none focus:ring-0'
                        value={inputValue.description}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button 
                type="submit" 
                className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer'
            >
                Submit
            </button>
        </form>    
    </div>
  )
}

export default ContactInfo