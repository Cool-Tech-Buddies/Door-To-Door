
import react from 'react'
function LandingPage() {
  return (
   <div >
 <div>
        {/* component */}
        {/* This is an example component */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" rel="stylesheet" />
        <div className="w-screen flex flex-row items-center p-2 justify-between bg-white shadow-xs">
          <div className="ml-8 text-lg text-gray-700 hidden md:flex">DOOR 2 DOOR</div>
          
          <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
            <i className="fas fa-bars" />
          </div>
          <div className="flex flex-row-reverse mr-8 hidden md:flex">
            <div className="text-gray-700 text-center outline-blue-500 outline-2  px-4 py-2 m-2">Log in</div>
            <div className="text-white text-center bg-blue-600 px-4 py-2 m-2 rounded-md">Sign up</div>
          </div>
        </div>
      </div>
      <div className='flex m-20'>
          <div className='m-5 p-5 text-left'>
     <h1 className='text-[50px] font-body mt-4'>START EARLY ,REACH SAFELY</h1>
     <h1>We assure for safe tranfer of your product , your product will send to the destination as you send</h1>
    <button className='text-white text-center  bg-blue-600 px-4 py-2 m-4 rounded-md'>Try how it works</button>
     </div>
     <div>
         <img src="https://multichannelmerchant.com/wp-content/uploads/2017/10/delivery-guy-at-door-feature.jpg"></img>
     </div>
      </div>

   </div>
  );
}

export default LandingPage;