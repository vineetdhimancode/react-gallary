
export const ImageCard = ({imageUrl}) => {
    return (
        <div className='w-36 p-2 border border-gray-300 shadow-sm'>
            <img src={imageUrl} alt="" />
            <p className='text-xs m-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. neque quae.
            </p>
        </div>
    )
}