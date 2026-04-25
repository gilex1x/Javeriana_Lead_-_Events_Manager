import { Header } from "../components/Header";
import type { ReactNode } from "react";
interface LayoutProps {
    children?: ReactNode;
}


export const Layout = ({ children }: LayoutProps): React.ReactElement => {
    return <>
        <Header />
        <section>
            {children}
        </section>
    </>
};