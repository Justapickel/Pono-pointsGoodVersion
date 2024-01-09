import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Leaderboard</h1>
      <h2>1st: Urdad123: 1613614767426741617 points</h2>
      <h2>2nd:SussiestOfTheBakas: 4 points</h2>
      <h2>3rd: mmmmm: 3 points</h2>
      <h2>888th: Chris P. Bacon (you): 0 points</h2>
      <h2>
        <Link href="/Lobby">Back to home</Link>
      </h2>
    </>
  );
}