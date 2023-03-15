import { SVGProps, useState } from 'react'
import { NavLink, Outlet, To } from 'react-router-dom'
import IconMenu from '~icons/material-symbols/menu-rounded'
import IconMission from '~icons/material-symbols/other-admission-outline-rounded'
import IconSetting from '~icons/material-symbols/settings-rounded'

import { RoutePaths } from '.'

function SideBarRoute() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="h-screen w-screen">
      <nav
        className={`fixed z-20 h-screen overflow-hidden bg-stone-200 transition-all ${
          isExpanded ? 'w-60 rounded-r-2xl shadow-2xl' : 'w-12 rounded-none'
        }`}
      >
        <ul className="flex h-full flex-col">
          <li>
            <button
              className="flex w-full items-center p-3 text-stone-500 transition hover:text-stone-600 active:text-stone-700"
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <IconMenu className="h-6 w-6 flex-shrink-0" />
              <span className="ml-5">Menu</span>
            </button>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center p-3 transition hover:text-teal-600 active:text-teal-700 ${
                  isActive ? 'text-teal-600' : 'bg-transparent text-stone-500'
                } ${isActive && isExpanded ? 'bg-stone-300' : ''}`
              }
              to={RoutePaths.Home}
              onClick={() => setIsExpanded(false)}
            >
              <IconMission className="h-6 w-6 flex-shrink-0" />
              <span className="ml-5">Mission</span>
            </NavLink>
          </li>
          <li className="mt-auto mb-2">
            <NavLink
              className={({ isActive }) =>
                `flex w-full items-center p-3 transition hover:text-teal-600 active:text-teal-700 ${
                  isActive ? 'text-teal-600' : 'bg-transparent text-stone-500'
                }  ${isActive && isExpanded ? 'bg-stone-300' : ''}`
              }
              to={RoutePaths.Setting}
              onClick={() => setIsExpanded(false)}
            >
              <IconSetting className="h-6 w-6 flex-shrink-0" />
              <span className="ml-5">Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {isExpanded && (
        <div
          role="button"
          tabIndex={0}
          className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-stone-900/40"
          onClick={() => setIsExpanded(false)}
          onKeyDown={() => setIsExpanded(false)}
        ></div>
      )}

      <main className="ml-12 h-full bg-stone-100 px-8 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export { SideBarRoute }
