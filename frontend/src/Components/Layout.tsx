import { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex">
      <div className="px-8 max-w-[300px] h-screen fixed left-0 top-0 bottom-0 overflow-auto">
        <div className="h-32 mt-8">
          <Header />
        </div>
        <SideMenu />
      </div>
      <div className="flex-1 ml-[300px]">
        <div className="content-container pt-[5rem]">{children}</div>
        <div className="py-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
