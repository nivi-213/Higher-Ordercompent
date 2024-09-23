import React from 'react'
const isAuthenticated = true;
export default function Higherorder(Component) {
    return function () {
        if (!isAuthenticated) {
          return <div>Is not Authenticated</div>
        }
    return <Component/>
  }
}

