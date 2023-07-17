export default function Header() {
    return (
        <header className="flex w-full h-full justify-between items-center bg-primary px-8 py-6">
            <h1 className="text-center text-segunda text-3xl">CookBook</h1>
            <button type="button" className="flex w-28 justify-center rounded-md bg-terceira px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-segunda"
            >Logout</button>
        </header>
    )
}