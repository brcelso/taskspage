import Image from "next/image";
import TaskPage from "./examples/tasks/page";
import ModeToggle from "@/registry/default/example/mode-toggle";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModeToggle></ModeToggle>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        
        <TaskPage></TaskPage>
      </div>
    </main>
  );
}
