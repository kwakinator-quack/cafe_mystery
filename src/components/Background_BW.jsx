function Background_BW({img}) {
  return (
    <div className="w-full bg-black">
      <img 
        className='flex justify-center w-max h-max shrink-0 object-cover opacity-20 z-0'
        src={img}
      />
    </div>
  )
}

export default Background_BW;