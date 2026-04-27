import { Header } from "../components/Header";
import type { ReactNode } from "react";

interface LayoutProps {
    children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <section className="flex-grow">
                {children}
            </section>
            <footer className="w-full py-6 text-center text-sm text-gray-500 border-t border-gray-200 bg-white mt-auto">
                Desarrollado por{' '}
                <a 
                    href="https://www.linkedin.com/in/gilberto-santamaria/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                    Gilberto Santamaría
                </a>
            </footer>
        </div>
    );
};
