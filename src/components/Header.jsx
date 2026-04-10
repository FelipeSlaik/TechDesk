function Header ({ pagina }) {
    return(
        <header className="h-16 bg-white px-4 flex items-center shadow">
          <h1 className="text-xl font-bold capitalize">{pagina}</h1>
        </header>
    )
}

export default Header;