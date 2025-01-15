//rafce
const DefaultLayout = ({children}) => {
  return (
    <div className='w-full h-full overflow-y-scroll bg-red-200'>
        <div className='max-w-x1 mx-auto min-w-[20rem]'>
            {children}
        </div>
    </div>
  )
}

export default DefaultLayout
