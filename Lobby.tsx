import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Yo howz it cuz</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h3>
        <Link href="/Tasks">TASKS</Link>
      </h3>
      <h4>
        <Link href="/Leaderboard1">LEADERBOARD</Link>
      </h4>
      <h5>
        <Link href="/RedeemPoints">REDEEM POINTS</Link>
      </h5>
      <h6>
        <Link href="/LevelUpInfo">LEVEL UP INFO</Link>
      </h6>
    </>
  );
}
