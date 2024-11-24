
import Image from "next/image";

export default function ProductCard() {
    return (
        <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="sm:w-full md:w-5/12 lg:w-3/12 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Image
                        src="/image/product1.jpg"
                        alt="Product One"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-4 text-lg font-semibold">PKR 7,000</p>
                <div className="flex flex-wrap justify-center gap-6 mt-10">
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Buy Now
                    </button>
                </div>
            </div>

            {/* Card 2 */}
            <div className="sm:w-full md:w-5/12 lg:w-3/12 p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="flex flex-wrap justify-center gap-6 mt-10">
            <Image
                        src="/image/product2.png"
                        alt="Product Two"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-4 text-lg font-semibold">PKR 8,000</p>
                <div className="flex justify-center items-center my-4">
                    
                    <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Buy Now
                    </button>
                    
                </div>
            </div>

            {/* Card 3 */}
            <div className="sm:w-full md:w-5/12 lg:w-3/12 p-4 bg-gray-100 rounded-lg shadow-md">
                <div className="flex items-center justify-center">
                    <Image
                        src="/image/product3.jpg"
                        alt="Product Three"
                        width={300}
                        height={300}
                        className="rounded-md"
                    />
                </div>
                <p className="text-center pt-4 text-lg font-semibold">PKR 5,000</p>
                <div className="flex justify-center items-center my-4">
                    <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
}
