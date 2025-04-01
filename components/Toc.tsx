function Toc() {
    return (
        <div className="hidden flex-col gap-2 px-5 py-10 md:flex md:px-0">
            <ul className="flex flex-col gap-2 whitespace-nowrap border-r-2 border-stone-200 pr-16 text-sm">
                <li>
                    <p className="font-semibold">YouTube Channel</p>
                </li>
                <li>
                    <a href="#how-to-contribute">How to contribute</a>
                </li>
                <li>
                    <a href="#where-to-share">Where to share</a>
                </li>
            </ul>
        </div>
    );
}

export default Toc;
