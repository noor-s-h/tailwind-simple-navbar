import Link from 'next/link';

export default function Logo({ onClick }) {
  return (
    <Link href="/">
      <a className="mr-4 text-xl" onClick={onClick}>
          Logo
      </a>
    </Link>
  );
}
