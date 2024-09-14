import React from 'react'

export default function Sidenav() {
  return (
    <div className='fixed right-0 flex justify-center flex-col items-center min-h-screen'>
      <div>
        <div className='flex justify-end space-x-1 flex-nowrap text-right'>
          <div>
            About
          </div>
          <div>
            ----
          </div>
        </div>
        <div className='flex justify-end space-x-1 flex-nowrap text-right'>
          <div>
            Services
          </div>
          <div>
            ----
          </div>
        </div>
      </div>
    </div>
  )
}
