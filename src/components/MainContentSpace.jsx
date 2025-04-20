function MainContentSpace({ ContentComponent }) {
  return (
    <div className="flex justify-center items-center inset-0 absolute z-10">
      <div className="bg-white opacity-75
        flex flex-col justify-center items-center 
        max-md:w-60 md:w-125 lg:w-250 
        max-md:h-36 md:h-75 lg:h-150"
      >
        <ContentComponent />
      </div>
    </div>
  )
}

export default MainContentSpace;

