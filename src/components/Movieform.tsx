import React, { useState } from 'react'
import { movie } from '../App'
import { useFormik} from 'formik'

const initialValues: movie = {
    name: '',
    ratings: 0,
    duration: ''
}

function Movieform() {
    const [isError, setIsError] = useState(false)
    const onSubmit = () => {
        setIsError(true)
        console.log(values)
    }
    const {values, handleChange, handleSubmit} = useFormik({
        initialValues,
        onSubmit
    })
    
  return (
    <div className='w-1/2'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-2' action="">
        <div className='flex flex-col'>
            <label htmlFor="">name</label>
            <input className='border border-black outline-none px-2 py-1' onChange={handleChange} placeholder='name' type="text" name="name" value={values.name} id="" />
        </div>
        <div className='flex flex-col'>
        <label htmlFor="">Rating(0-100)</label>
            <input className='border border-black outline-none px-2 py-1' onChange={handleChange} placeholder='rating' type="number" name="ratings" value={values.ratings} id="" />
        </div>
        <div className='flex flex-col'>
            <label htmlFor="">Duration</label>
            <input className='border border-black outline-none px-2 py-1' onChange={handleChange} placeholder='duration' type="text" name="duration" value={values.duration} id="" />
        </div>
        {isError && (
             <div className='text-red-500'>
             Please specify time in hours or minutes (e.g. 2.5h or 150m)
           </div>
        )}
        <input className='bg-gray-400 text-white py-1 cursor-pointer' type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Movieform
