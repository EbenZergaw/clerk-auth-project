import Link from "next/link"
import { auth, UserButton } from "@clerk/nextjs"


function Header() {

    const { userId } = auth()
    console.log(userId);

  return (
    <>
        <nav className="bg-blue-700 py-4 px-6 flex items-center justify-between mb-5">
            <div className="flex items-center">
                <Link href='/'>
                    <div className="text-lg uppercase font-bold text-white">
                        Clerk Auth App
                    </div>
                </Link>
            </div>
            <div className="text-white flex items-center">
                {!userId && (
                    <>
                        <Link className="text-gray-300 hover:text-white mr-4" href='/sign-in'>
                        Sign in
                        </Link>
                        <Link className="text-gray-300 hover:text-white mr-4" href='/sign-up'>
                            Sign Up
                        </Link>
                    </>
                )}
                <UserButton afterSignOutUrl="/"></UserButton>
            </div>
        </nav>
    </>
  )
}

export default Header