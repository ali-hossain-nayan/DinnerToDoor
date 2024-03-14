
//Next.js
//1.Routing,Api routes,rendering,data fetching,styling,optimization,
//server component defautl and its can run tasks like file reading or fetching data
//but can deal with hooks or user interaction client component opposite of it
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Not Found</h2>
      <p className="text-gray-600 mb-8">Could not find the requested resource</p>
      <Link href="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none">
          Return Home
        </button>
      </Link>
    </div>


  );
}
