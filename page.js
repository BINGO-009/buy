import Image from "next/image";
const punycode = require('punycode/');
console.log(punycode);

export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh]"> 
        <div className="font-bold text-white text-3xl">Crowd Funding Platform</div>
        <p className="text black">  
          A Crowd funding platform for developers and entrepreneurs
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 
          focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium 
          rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500
          hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5
          text-center me-2 mb-2">Read More</button>
        </div>
      </div>

      <div className="bg-white h-2 opacity-30"></div>

      <div className="text-white container mx-auto py-30">
        <h1 className="text-2xl font-bold text-center my-9"> Hi buy me </h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3">
            <img   className="bg-slate-400 rounded-full p-2" width ="88" src="/cartoon 1.jpg" alt=""/>
            <p>Fund yourself</p>
          </div>
          <div className="item space-y-3">
            <img   className="bg-slate-400 rounded-full p-2" width ="88" src="/cartoon 1.jpg" alt=""/>
            <p>Fund yourself</p>
          </div>
          <div className="item space-y-3">
            <img   className="bg-slate-400 rounded-full p-2" width ="88" src="/cartoon 1.jpg" alt=""/>
            <p>Fund yourself</p>
          </div>
        </div>
        
      </div>

      <div className="bg-white h-2 opacity-40"></div>

<div className="text-white container mx-auto flex flex-col items-center justify-center py-32" >
<iframe width="560" height="315" src="https://www.youtube.com/embed/voF1plqqZJA?si=7h3tUBxo9iPYtnTr"
 title="YouTube video player" frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  
    </div>
  
    </>
  );
}
