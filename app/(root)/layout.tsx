import Header from "@/components/ui/Header";
import { ReactNode } from "react";
const layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen text-gray-400">
      <Header />
      <div>{children}</div>
    </main>
  );
};

export default layout;
