
export const ImageCard = ({imageUrl}) => {
    return (
        <div className='w-64 p-2 border border-gray-300 shadow-sm'>
            <img src={imageUrl} alt="" className="w-full" />
            <p className='text-xs m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. neque quae.
            </p>
        </div>
    )
}