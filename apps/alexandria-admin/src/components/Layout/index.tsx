import { ReactNode } from "react";

type Props = {
    children: ReactNode
};

const Layout = ({children}: Props) => {
  return (
    <main className="flex justify-center items-center">
        <header></header>
        {children}
    </main>
    );
};

export default Layout;