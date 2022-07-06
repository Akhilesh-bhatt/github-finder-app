import spinner from './assets/loading.gif';

function Spinner() {
  return (
    <div className='mt-12 w-100'>
        <img width={180} src={spinner} alt="Loading..." className='mx-auto text-center'/>
    </div>
  )
}

export default Spinner