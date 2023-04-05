import React, { ReactNode } from 'react'
import { Meta } from './Meta';
import { Navbar } from './Navbar';

interface MyProp {
    children?: ReactNode;
}

export const Layout = ({ children }: MyProp): JSX.Element => {
    return (
        <>
            <Meta />
            <div className=''>
                <Navbar />
                <main>{children}</main>
            </div>
        </>
    );
}
