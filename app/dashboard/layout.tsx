import Head from "next/head";
import LeftSidebar from "./ui/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=" tracking-widest text-[9px] leading-[16px] ">
      <div className="absolute z-10">
        <LeftSidebar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
