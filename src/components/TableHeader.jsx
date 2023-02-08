import { BsClock } from 'react-icons/bs'

const TableHeader = () => {
  return (
    <div className='grid grid-cols-player mx-auto px-4 py-2 mb-2 border-b-[1px] text-white uppercase'>
      <span className='col-span-1'>#</span>
      <span className='col-span-5'>Title</span>
      <span className='col-span-5'>Album</span>
      <span className='col-span-1'>
        <BsClock size='18px'/>
      </span>
    </div>
  )
}

export default TableHeader
