
export const Footer = () => {
const nav = ['About Us', 'Jobs', 'Blog', 'parents', 'Gift Cards', 'Help', 'Terms', 'Accecibility', 'Privacy']

  return (
    <>
        <footer className="footer bg-zinc-800 ml-[162px] text-white max-2xl:ml-[0px] px-4 py-8">
        <div className="mx-auto flex flex-col md:flex-row justify-center items-center">
            <div className="footer-nav flex flex-row font-bold text-lg mb-[30px] flex-wrap justify-center items-center space-x-6">
                {nav.map((name)=>(
                    <a key={name} href="#" className="text-base text-zinc-400 m-[0px] hover:text-white">{name}</a>
                ))}
            </div>
        </div>
        <div className="border-t border-zinc-700 mt-8 pt-4 text-center">
            <p className="text-xs text-zinc-400">&copy; 2024 Diana Company. All Rights Reserved.</p>
        </div>
        </footer>
    </>
  )
}
