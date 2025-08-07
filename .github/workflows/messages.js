import Link from "next/link";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <nav className="flex justify-center space-x-6 mb-10">
        <Link href="/"><a className="text-pink-700 hover:text-pink-900 font-semibold">Home</a></Link>
        <Link href="/lovers-lane"><a className="text-pink-700 hover:text-pink-900 font-semibold">Lovers Lane</a></Link>
        <Link href="/tributes"><a className="text-pink-700 hover:text-pink-900 font-semibold">Tributes</a></Link>
        <Link href="/messages"><a className="text-pink-700 hover:text-pink-900 font-semibold">Messages</a></Link>
      </nav>
      <h1 className="text-4xl font-bold text-pink-700 mb-4 text-center">Messages</h1>
      <p className="text-center text-pink-900 max-w-xl mx-auto">
        Coming soon: private messaging for hearts to connect.
      </p>
    </div>
  );
}