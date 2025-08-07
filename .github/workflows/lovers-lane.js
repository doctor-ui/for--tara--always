import Link from "next/link";

export default function LoversLanePage() {
  const profiles = [
    { name: "Emily", story: "After losing my husband, I found hope again through this site." },
    { name: "James", story: "Here to find a love that's more than a moment." },
    { name: "Sophia", story: "Every heartbeat tells a story. I’m here to share mine." },
    { name: "Michael", story: "Tara’s story moved me. I want something real too." }
  ];

  return (
    <div className="min-h-screen bg-pink-100 p-6">
      {/* Navigation Bar */}
      <nav className="flex justify-center space-x-6 mb-10">
        <Link href="/"><a className="text-pink-700 hover:text-pink-900 font-semibold">Home</a></Link>
        <Link href="/lovers-lane"><a className="text-pink-700 hover:text-pink-900 font-semibold">Lovers Lane</a></Link>
        <Link href="/tributes"><a className="text-pink-700 hover:text-pink-900 font-semibold">Tributes</a></Link>
        <Link href="/messages"><a className="text-pink-700 hover:text-pink-900 font-semibold">Messages</a></Link>
      </nav>

      <h1 className="text-4xl font-bold text-center text-pink-700 mb-2">
        Lovers Lane
      </h1>
      <p className="text-center text-pink-800 mb-6 max-w-2xl mx-auto">
        Where kindred hearts take a walk toward forever. Scroll and find stories, connections, and people who still believe in true love.
      </p>

      <div className="space-y-6 max-w-3xl mx-auto">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 border border-pink-200 hover:shadow-2xl transition"
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-2">{profile.name}</h2>
            <p className="text-pink-900">{profile.story}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-pink-700">
        <p>“Even after she died, that's love.”</p>
        <p className="italic mt-2">— For Tara Always</p>
      </div>
    </div>
  );
}