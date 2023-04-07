import React, { ReactNode } from 'react'
import { Meta } from './Meta';
import { Navbar } from './Navbar';
import { Sortsection } from './Sortsecion'


interface MyProp {
    children?: ReactNode;
}

export const Layout = ({ children }: MyProp): JSX.Element => {
    return (
        <>
            <Meta />
            <div className=''>
                <Navbar />
                <Sortsection />
                <main>{children}</main>
            </div>
        </>
    );
}
