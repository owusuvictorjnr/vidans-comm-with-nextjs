import React, { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Store } from '../utils/Store';

const Layout = ({ title, children }) => {
  const { state } = useContext(Store);
  const { cart } = state;

  return (
    <>
      <Head>
        <title>{title ? title + "Vidans'-Fashion" : "Vidans'-Fashion"}"</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex justify-between items-center h-12 shadow-md px-4">
            <Link href="/" className="text-lg font-bold uppercase">
              vidan's clothings
            </Link>

            <div>
              {/* Cart & Login button*/}
              <Link href="/cart" className="p-2 capitalize">
                cart
                {cart.cartItems.length > 0 && (
                  <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {/*accumulate(a) and current item(c)*/}
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </span>
                )}
              </Link>

              <Link href="/login" className="p-2 capitalize">
                login
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          copyright &copy; 2022 Vitech Solutions
        </footer>
      </div>
    </>
  );
};

export default Layout;
