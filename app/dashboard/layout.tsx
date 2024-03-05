import Head from "next/head";
import LeftSidebar from "./ui/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="uppercase tracking-widest text-xs leading-3 ">
      <div className="absolute z-10">
        <LeftSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
