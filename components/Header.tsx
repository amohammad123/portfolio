import Link from "next/link";

// components
import Nav from "@/components/Nav";
import {Button} from "@/components/ui/button";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">

                {/* Logo  */}
                <Link href="/">
                    <h1 className={'text-4xl font-semibold'}>Mohammad Akhavi
                        <span className={'text-accent'}>.</span>
                    </h1>
                </Link>

                {/*  desktop nav and hire me button  */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav/>
                    <Link href="/contact">
                        <Button className={'bg-accent/30 hover:bg-accent/20'}>Hire me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>

        </header>
    );
};

export default Header;