'use client'

import Link from 'next/link';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
  
  const isUserLoggedIn = true;
  const [ providers, setProviders ] = useState(null);
  const [ toggleDropdown, setToggleDropdown ] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    }
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3 px-4'>

        {/* Desktop nav */}

        <Link href="/" className='flex gap-2 flex-center'>
            <Image
            src="assets/images/logo.svg"
            alt="Promptopia logo"
            width={30}
            height={30}
            className='object-contain'
            />
            <p className='logo_text'>Promptopia</p>
        </Link>

        {/* mobile nav */}
        <div className="sm:flex hidden">
            {isUserLoggedIn ? (
                <div className="flex gap-3 md:gap-5">
                    <Link href="/create-prompt"
                    className='black_btn'>
                    Create Post
                    </Link>

                    <button type="button" onClick={signOut}
                    className='outline_btn'>
                        Sign Out
                    </button>

                    <Link href="/profile">
                        <Image src="/assets/icons/profile.svg"
                        width={30}
                        height={30}
                        alt="profile"
                        />
                    </Link>
                </div>
                ): (
                    <>
                        {providers &&
                        Object.values(providers).map((provider)=>(
                            <button
                            type="button"
                            key={provider.name}
                            onClick={() => signIn(provider.id)}>
                                Sign In
                            </button>
                        ))}
                    </>
                )}
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden flex relative">
            {isUserLoggedIn ? (
                <div className="flex">
                    <Image
                    className='toggle_btn'
                    src="/assets/icons/menu.svg"
                    width={30}
                    height={30}
                    alt = "toggle"
                    onClick={() => {
                    console.log("Image clicked");
                    setToggleDropdown(true);
                    }}
                    />


                    {toggleDropdown && (
                        <div className="dropdown">
                            <Link
                            href="/profile"
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}>
                                My Profile
                            </Link>
                            <Link
                            href="/profile"
                            className='dropdown_link'
                            onClick={() => setToggleDropdown(false)}>
                                Create Prompt
                            </Link>
                            <Link
                            href="/profile"
                            className='black_btn w-full'
                            onClick={() => setToggleDropdown(false)}>
                                Sign out
                            </Link>
                        </div>
                    )}
                    
                    
                </div>
            ): (
                <>
                    {providers &&
                    Object.values(providers).map((provider)=>(
                        <button
                        type="button"
                        key={provider.name}
                        onClick={() => signIn(provider.id)}>
                            Sign In
                        </button>
                    ))}
                </>
            )}
        </div>
    </nav>
    )
}

export default Nav