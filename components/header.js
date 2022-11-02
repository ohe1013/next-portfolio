import Link from "next/link"
import DarkModeToggleFunction from "./dark-mode-toggle-button"

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="ml-3 text-xl">오현근 포트폴리오</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link className="mr-5 hover:text-gray-900" href="/">
                        홈
                    </Link>
                    <Link className="mr-5 hover:text-gray-900" href="/projects">
                        프로젝트
                    </Link>
                    <Link className="mr-5 hover:text-gray-900" href="/contact">
                        연락하기
                    </Link>
                    </nav>
                    <DarkModeToggleFunction/>
                </div>
            </header>
        </>
    )
}