import { Plus, Pencil, Trash, SearchIcon } from "lucide-react"


export function Header() {
    return (
        <header className="w-screen  max-w-sm p-4 bg-[#16151e]  h-full">
            <nav className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-50">Meus contatos</h2>

                <ul className="flex items-center">
                    <li className="mr-2">
                        <Plus name="add" color="#e1e1e6"></Plus>
                    </li>

                    <li className="mr-2">
                        <Pencil name="pencil" color="#e1e1e6"></Pencil>
                    </li>

                    <li className="mr-2">
                        <Trash name="trash" color="#e1e1e6"></Trash>
                    </li>
                </ul>
            </nav>

            <form className="mt-6">
                <div className="input-wrapper focus-within:outline outline-2 outline-white flex items-center gap-3 px-6 py-4 rounded-lg bg-[#24243d]">
                    <label className="sr-only" htmlFor="filter">
                        Encontre um contato
                    </label>
                    <SearchIcon color="gray" name="search-outline"></SearchIcon>
                    <input
                        className="bg-[#24243d]   text-slate-50 outline-none"
                        id="filter"
                        type="text"
                        placeholder="Encontre um contato"
                    />
                </div>
            </form>
        </header>
    )
}