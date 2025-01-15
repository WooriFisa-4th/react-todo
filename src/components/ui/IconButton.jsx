// eslint-disable-next-line react/prop-types
const IconButton = ({icon, onClick}) => {
  return (
    <button onClick={onClick} className={'w-8 text-xl font-semibold cursor-pointer'}>
        {icon}
    </button>
  )
}

export default IconButton
