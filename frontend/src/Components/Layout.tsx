import { PropsWithChildren, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SideMenu } from "./SideMenu";

export function Layout({ children }: PropsWithChildren) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <div className="flex">
      <div
        className={`${
          isMenuOpen ? "left-0" : "-left-full"
        }  bg-white w-full px-8 md:max-w-[300px] h-screen fixed md:left-0 top-0 bottom-0 overflow-auto`}
      >
        <div className="h-32 mt-8 flex justify-between">
          <Header />
          <div className="md:hidden">
            <button className="pb-2 pl-8" onClick={() => setIsMenuOpen(false)}>
              X
            </button>
          </div>
        </div>
        <SideMenu closeMenu={() => setIsMenuOpen(false)} />
      </div>
      <div className="flex-1 md:ml-[300px] p-8">
        <div className="w-full md:hidden flex justify-between">
          <div>
            <Header />
          </div>
          <div>
            <button onClick={() => setIsMenuOpen(true)} className="pb-2 pl-2">
              menu
            </button>
          </div>
        </div>
        <div className="content-container pt-[3rem] md:pt-[5rem]">
          {children}
        </div>
        <div className="pt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
}
