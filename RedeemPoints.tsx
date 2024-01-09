import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>You have x points</h2>
      <h2>y prize: z points</h2>
      <h2>y1 prize: z1 points</h2>
      <h2>y2 prize: z2 points</h2>
      <h2>y3 prize: y3 points</h2>
      <h2>
        <Link href="/Lobby">Back to Lobby</Link>
      </h2>
    </>
  );
}