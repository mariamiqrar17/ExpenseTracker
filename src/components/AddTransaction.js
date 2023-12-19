import faceImage from "../assets/faces.svg";
import star from "../assets/star.png"

const Main = () => {
    return <div className='relative flex justify-start sm:justify-center items-center gap-10 sm:gap-0 flex-col sm:flex-row pt-14 lg:my-24 md:my-5 sm:my-3 px-5'>
      
    {/* 1 */}
    <div   className='flex-1 flex flex-col justify-end items-end h-[490px] sm:h-[460px] sm:w-[50%]'>
      <div className="mx-auto flex flex-col justify-between sm:justify-center items-around h-full lg:w-full gap-4 sm:gap-0">
        <h1 className='text-blue-500 font-semibold sm:justify-center text-base sm:text-[1rem] w-[90%]'>Welcome to yorfy</h1>
      <div className='font-bold tracking-wider xl:leading-[5rem] md:leading-[3rem] xl:text-[3.5rem] sm:text-[2rem] text-start text-3xl leading-[50px]'>
        Now Available,<br />Meet Yorfy NFT<br />Collection 
        <img className="inline-block h-[60px] sm:h-[20px] md:h-[50px] xl:h-[60px]" src={star} alt="" />
      </div>        
    <div className='text-base px-0 font-light tracking-wide text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br className="hidden xl:block" /> Dolores molestiae quo consequatur possimus, vero aliqua.</div>
      <div className='flex sm:justify-start justify-between items-center md:h-[90px] sm:h-[60px] h-[80px] gap-5'>
        <div className="">
          <p className='text-[2rem] md:text-[3rem] text-start font-bold'>546</p>
          <p className='text-start md:text-[20px] sm:text-base font-light'>NFT Items</p>
        </div>
        <div className='h-full border-r-2'></div>
        <div className="">
          <p className='text-[2rem] md:text-[3rem] text-start font-bold'>42</p>
          <p className='text-start md:text-[20px] sm:text-base font-light'>Owners</p>
        </div>
        <div className='h-full border-r-2'></div>
        <div className="">
          <p className='text-[2rem] md:text-[3rem] text-start font-bold'>378</p>
          <p className='text-start md:text-[20px] sm:text-base font-light'>Items Sold</p>
        </div>
      </div>
      </div>
    </div>
    {/* 2 */}
    <div className='sm:flex-1 sm:flex sm:justify-end sm:items-end h-[530px] sm:h-[460px] sm:w-[50%] w-full'>
    <div className='sm:flex-1 sm:flex sm:justify-end sm:items-end h-[530px] sm:h-[460px] sm:w-[50%] w-full'>
  <div className="w-full h-full flex justify-end items-end relative sm:w-[90%]">

    {/* Image Container */}
    <div className='h-[300px] sm:h-[370px] w-[88%] xl:h-[368px] absolute top-[0%] left-[50%] translate-x-[-50%] rounded-lg'>
      <img className='block h-full w-full' src={faceImage} alt="faces" />
    </div>

    {/* Below div */}
    <div className="border-blue-600 border-2 shadow-lg shadow-black rounded-lg h-52 lg:h-[256px] w-full hidden lg:block">
      <div className='flex flex-col justify-end items-center lg:justify-center lg:items-end gap-5 h-full p-5 lg:flex-row sm:flex-col sm:justify-end sm:items-center'>
        <button className='hover:bg-inherit hover:border bg-blue-500 block h-[48px] sm:w-[214px] w-full rounded-lg'>Buy an open sea</button>
        <button className='hover:bg-blue-500 hover:border-none border block h-[48px] sm:w-[214px] w-full rounded-lg'>Know more</button>
      </div>
    </div>
  </div>
</div>

</div>

  </div>
};

export default Main;
