import React from 'react'
import Link from 'next/link'

const Pagination = ({ myRow }: any) => {
  const myArr = [];
  for (let i = myRow?.pageNumber - 6; i < myRow?.pageSize && i < Number(myRow?.pageNumber) + 6; i++) {
    myArr.push(i)
  };
  console.log(myArr)
  const activeClass = {
    active:
      "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
    other:
      "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
  };

  return (
    <div className="flex gap-2">
      {myArr?.map((e, i) => {
        if (e > 0) {
          return (
            <div className="" key={i}>
              <Link
                key={i}
                href={{
                  pathname: "/movie",
                  query: {
                    page: e,
                  },
                }}
                aria-current="page"
                className={myRow.pageNumber == e ? activeClass.active : activeClass.other}
              >
                {e}
              </Link>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Pagination;
