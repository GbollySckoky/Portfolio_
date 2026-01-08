import about from '../../assets/IMG_251.jpg'
import okay from '../../assets/IMG_2937.jpg'
const Img = () => {
  const images = [ about,okay] 
  return (
    <div className="mt-20">
        <div className="grid md:grid-cols-2 w-full gap-5">
            {images.map((image,index) => (
                <img src={image} key={index} className='h-fit object-cover rounded-lg border w-full' />
            ))}
        </div>
    </div>
  )
}

export default Img