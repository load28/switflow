import Link from 'next/link';

export default function Piece() {
    return <h1 className="title">
        Read <Link href="/">this page!</Link>
    </h1>;
}