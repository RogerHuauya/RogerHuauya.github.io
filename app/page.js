import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen p-24">
            <header className="w-full">
                <nav className="flex flex-row justify-center">
                    <ul className="flex space-x-4">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </nav>
            </header>
            <main className="flex flex-col items-center text-center">
                <h1 className="text-6xl font-bold">Roger Huauya Mamani</h1>
                <p className="mt-2 text-2xl">Fullstack developer - Computer Scientist</p>
                <Image
                    src="/prof_pic.png"
                    alt="Roger Huauya Mamani"
                    width={200}
                    height={200}
                    className="mt-4 rounded-b"
                />
                <p className="mt-4 max-w-2xl">
                    Hi, I’m Roger, a computer scientist currently working as a Full-stack developer and cloud developer for US-based companies as contractor and freelance.
                    I am passionate about learning new cloud technologies tendencies in AWS, GCP and Azure.
                </p>
                <p className="mt-2 max-w-2xl">
                    I complete my bachelor&lsquo;s degree in Mechanical Engineering at the Universidad Nacional de Ingeniería in Lima, Peru.
                    I am currently studying computer science at the University of Engineering and Technology in Lima, Peru.
                </p>
                <p className="mt-2 max-w-2xl">
                    In my free time, I enjoy flying drones for aerial photography, running, and playing video games with friends.
                </p>
                <p className="mt-4">Contact me on <a href="#" className="text-blue-500 hover:underline"><i className="fab fa-linkedin" ></i> </a>.</p>
            </main>
            <footer className="mt-auto flex flex-row justify-center">
                <p>© Copyright 2024 Roger Huauya Mamani. Powered by Next.js.</p>
            </footer>
        </div>
    );
}
