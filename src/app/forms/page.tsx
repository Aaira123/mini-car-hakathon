import Link from "next/link"

export default function forms(){
    return(
    <nav className="bg-blue-50 w-full h-full -mt-36">
        <div className="m-48 font-thin">
            <h1 className="text-5xl font-semibold text-center uppercase -mt-9">Enter your details</h1>
    
            <div>
             <form className=" mt-10 gap-5 flex justify-center items-center flex-col">
    
             <input type="email" className=" p-2 rounded-2xl w-2/5 border border-gray-200" placeholder="Enter your Email"/>
             <input type="pasword" className="p-2 rounded-2xl w-2/5 border border-x-gray-200" placeholder="Enter your Pasword"/>
             <input type="card no." className="p-2 rounded-2xl w-2/5 border border-gray-200" placeholder="Enteryour Card Number"/>
            <input type="address" className="p-2 rounded-2xl w-2/5 border border-gray-200" placeholder="Enter your Address" />

             <div className="py-8">
                <Link href="/Thankyou">
             <button className="py-3 px-5 rounded-lg bg-blue-500 text-white hover:bg-red-600">Place your order</button>
             </Link>
             </div>

             </form>
     
            </div>
        </div>
        </nav>
    )
    }