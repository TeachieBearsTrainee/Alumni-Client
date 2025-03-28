import React from 'react'

const Requests = (props) => {
  return (
    <div className="w-full bg-[#303030] flex h-15 mt-3 rounded-[0.3rem] items-center justify-between  p-5 relative ">
            <div className="flex items-center gap-3">
              <img
                src={props.profile}
                alt="profile"
                className="h-10 w-10"
              />
              <div className="flex flex-col">
                <h1 className="text-white">{props.name}</h1>
                <h2 className="text-[#ACACAC] text-sm">{props.username}</h2>
              </div>
            </div>
            <div>
              <button className="text-white border border-[#13686c] px-4 py-1 font-thin ">
                ACCEPT
              </button>
            </div>
          </div>
  )
}

export default Requests