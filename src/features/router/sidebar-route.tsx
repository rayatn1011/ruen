import { NavLink, Outlet } from 'react-router-dom'
import IconMenu from '~icons/material-symbols/menu-rounded'
import IconChat from '~icons/material-symbols/chat-outline-rounded'
import IconSetting from '~icons/material-symbols/settings-rounded'

import { RoutePaths } from '.'

function SideBarRoute() {
  const classNames = {
    navItem: {
      base: 'block p-3 text-xl text-stone-500 transition hover:text-teal-600 active:text-teal-700',
      isActive:
        'block p-3 text-xl transition text-teal-600 active:text-teal-700',
    },
  }

  return (
    <div className="grid h-screen w-screen grid-cols-[max-content_1fr]">
      <nav>
        <ul className="flex h-full flex-col items-center bg-stone-200">
          <li>
            <button className={classNames.navItem.base} type="button">
              <IconMenu />
            </button>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classNames.navItem.isActive : classNames.navItem.base
              }
              to={RoutePaths.Home}
            >
              <IconChat />
            </NavLink>
          </li>
          <li className="mt-auto mb-2">
            <NavLink
              className={({ isActive }) =>
                isActive ? classNames.navItem.isActive : classNames.navItem.base
              }
              to={RoutePaths.Setting}
            >
              <IconSetting />
            </NavLink>
          </li>
        </ul>
      </nav>
      <main className="bg-stone-100 px-8 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export { SideBarRoute }
