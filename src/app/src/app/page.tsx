export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Manus Sports App</h1>
      <p className="text-xl mb-4">College Basketball Recruiting Management</p>
      <a href="/dashboard" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
        Go to Dashboard
      </a>
    </div>
  );
}
