import React from 'react'
import Link from 'next/link'
// import type {AppProps} from 'next/app';

const Pagination = ({myRow}) => {
    console.log(myRow)
    const myArr = [];
    for(let i = 0 ; i<myRow?.pageSize ; i++){
        myArr.push(i)
    }

  const activeClass = {
    active:
      "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    other:
      "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
  };
    // console.log(totalRows , pageSize)
  return (
    <div className="flex gap-2">
      {myArr?.map((e , i)=>{
        return(
            <div className="">
                <Link
                  key={i}
                  href={{
                    pathname: "/movie",
                    query: {
                      page: i + 1,
                    },
                  }}
                  aria-current="page"
                  className={myRow.pageSize == i + 1 ? activeClass.active : activeClass.other}
                >
                  {i + 1}
                </Link>
            </div>
        )
      })}
    </div>
  )
}

export default Pagination;
