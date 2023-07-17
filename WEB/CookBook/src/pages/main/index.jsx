import Card from "../../components/Card";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export default function Main() {
    return (
        <main className="flex flex-col h-screen w-screen items-center justify-between">
            <div className="flex w-full h-24 bg-primeira">
                <Header />
            </div>
            <div className="flex h-full w-full items-center justify-between bg-secondary">
                <div className="flex flex-col h-full w-72 bg-segunda">
                    <Sidebar />
                </div>
                <div className="flex flex-col items-center h-full w-full bg-slate-200 py-10">
                    <Card />
                </div>
            </div>
        </main>
    )
}