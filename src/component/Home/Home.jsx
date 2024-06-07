//  import banner from '../../assets/Image/banner.jpeg'
const Home = () => {
  
    return (
        <div className='w-full bg-cover bg-center relative h-[600px] bg-[url("https://i.postimg.cc/htpK5nrm/banner.jpg")]'>
           <div className="w-full bg-white opacity-90 h-full flex items-center justify-center">
                    <div>
                        <div>
                            <h1 className="text-5xl font-bold mb-7">I Grow By Helping People In Need</h1>
                        </div>
                        <div className="flex items-center border justify-between w-2/4 mx-auto z-10 rounded-md text-black">
                            <input type="text" className="w-[300px]"/>
                            <button className="bg-[#ff204e] text-white py-2 px-6 rounded-r-md">Search</button>
                        </div>
                    </div>
           </div>
        </div>
        
    );
};

export default Home;