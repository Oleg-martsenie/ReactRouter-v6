import { useParams } from 'react-router-dom'

export const AboutItem = () => {

  const params = useParams()

    return <>

    <div className='flex justify-center my-4'>
      <h1 className='text-2xl text-blue-500'>Page about <span className='bg-gray-200 p-1 text-black capitalize'>{params.slug}</span> ({params.slug?.length}) </h1>
    </div>
    </>
}

export default AboutItem
