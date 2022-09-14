import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='flex justify-center items-center border-b-2 border-b-slate-800'>
            <div className='px-4 py-4 max-w-xl'>
                <Link href='/'>
                    <a className='text-lg font-bold tracking-wide transition-colors hover:text-gray-200 active:text-blue-300'>
                        MBTI Compability ♥
                    </a>
                </Link>
            </div>
        </div>
    );
}
