<template>
  <Disclosure as="nav" class="bg-gray-800 fixed top-0 z-50 w-full" v-slot="{ open }">
    <div class="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center divide-x divide-white">
            <svg class="block h-12 w-auto pr-1 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 800 800">
              <path d="M400 49.9996c193.17 0 350 156.8293 350 349.999 0 193.1697-156.83 349.999-350 349.999S50 593.1683 50 399.9986c0-193.1697 156.83-349.999 350-349.999ZM400 80c176.613 0 320 143.3867 320 319.9986 0 176.612-143.387 319.9986-320 319.9986S80 576.6106 80 399.9986C80 223.3866 223.387 80 400 80Z"/>
              <path d="M400 93.75c169.0237 0 306.25 137.226 306.25 306.25S569.0237 706.2501 400 706.2501c-169.0238 0-306.25-137.226-306.25-306.25S230.9762 93.75 400 93.75Zm0 30c152.4661 0 276.2498 123.7833 276.2498 276.25 0 152.4668-123.7837 276.2502-276.2498 276.2502-152.4661 0-276.2498-123.7834-276.2498-276.2502 0-152.4667 123.7837-276.25 276.2498-276.25Z"/>
              <path d="M398.9486 264.4631c58.3178 0 45.6391 20.2774 69.416 20.6323 3.2689.0488 11.081.132 18.9886-4.9186 41.1142-26.259 97.242-52.6757 106.8231-38.516 8.824 13.0404 1.9283 51.656-11.1096 82.2523-10.1118 23.7352-25.6086 39.2794-29.6172 55.739-4.2747 17.5449-.2265 44.4212-1.2843 67.1583-1.0862 23.3673-3.7486 37.762-14.6937 52.1124-18.697 24.5143-68.8245 31.6294-79.9358 65.722-4.3476 13.3396-13.3949 49.9216-24.4574 65.0292-15.8513 21.653-34.1297 20.0963-34.1297 20.0963s-18.2784 1.5567-34.1297-20.0963c-11.0625-15.1076-20.1098-51.6896-24.4574-65.0292-11.1113-34.0926-61.2388-41.2077-79.9358-65.722-10.945-14.3504-13.6075-28.7451-14.6944-52.1124-1.0575-22.737 2.9911-49.6134-1.2836-67.1584-4.0104-16.4595-19.5044-32.0037-29.6183-55.7389-13.0378-30.5962-19.931-69.212-11.1075-82.2522 9.5808-14.1598 65.7079 12.257 106.8221 38.5159 7.9076 5.0506 15.7197 4.9674 18.9885 4.9186 23.777-.3549 11.0983-20.6323 69.4161-20.6323Z"/>
            </svg>
            <div class="flex flex-col pl-2 font-semibold">
              <span class="text-sm leading-none text-white">CHULA</span>
              <span class="text-sm leading-none text-white">HOMA</span>
              <span class="text-sm leading-none text-white">HOUNDS</span>
            </div>
          </div>
          <div class="ml-6 hidden sm:block">
            <div class="flex space-x-4">
              <nuxt-link v-for="link in links" :key="link.name" :to="link.to" :class="[route.path === link.to ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']">
                {{ link.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
        <!-- <div class="hidden sm:ml-6">
          <div class="flex items-center">
            <button type="button" class="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <Menu as="div" class="hidden relative ml-3">
              <div>
                <MenuButton class="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div> -->
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden" v-slot="{ close }">
      <div class="space-y-1 px-2 pt-2 pb-3">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton as="template" v-for="link in links" :key="link.name">
          <nuxt-link @click="close()" :href="link.to" :class="[link.to === route.path ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'cursor-pointer block rounded-md px-3 py-2 text-base font-medium']">
            {{ link.name }}
          </nuxt-link>
        </DisclosureButton>
      </div>
      <div class="border-t border-gray-700 pt-4 pb-3">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">Tom Cook</div>
            <div class="text-sm font-medium text-gray-400">tom@example.com</div>
          </div>
          <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-3 space-y-1 px-2">
          <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Your Profile</DisclosureButton>
          <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Settings</DisclosureButton>
          <DisclosureButton as="a" href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">Sign out</DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
const route = useRoute()



const links = [
  { name: 'Home', to: '/' },
  { name: 'About Us', to: '/about' },
  { name: 'Fixtures', to: '/fixtures' }
]
</script>