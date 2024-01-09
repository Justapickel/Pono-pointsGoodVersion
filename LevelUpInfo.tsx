import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>Level UP!</h1>
      <h2>Do Some Good, Level Up!</h2>
      <h2>You are x EXP away from getting to level y! At level y, you’re eligible to get z!
</h2>
      <h2>
        <Link href="/Lobby">Back to Lobby</Link>
      </h2>
    </>
  );
}