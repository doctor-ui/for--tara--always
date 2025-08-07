import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-pink-700 mb-4">For Tara Always</h1>
      <p className="text-lg text-center max-w-xl text-pink-900 mb-6">
        A place where souls who believe in true love come to connect. Dedicated to Tara, and to all who carry the memory of eternal love.
      </p>
      <nav className="flex space-x-8 text-pink-700 font-semibold">
        <Link href="/lovers-lane"><a className="hover:text-pink-900">Lovers Lane</a></Link>
        <Link href="/tributes"><a className="hover:text-pink-900">Tributes</a></Link>
        <Link href="/messages"><a className="hover:text-pink-900">Messages</a></Link>
      </nav>
    </div>
  );
}