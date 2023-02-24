<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid max-w-2xl mx-auto">
      <!-- fguhijgfhgjk -->
      <!-- <PaceTabsCommp /> -->
      <div>
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select your country</label>
          <select
            id="tabs"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>p8</option>
            <option>p12</option>
            <option>p15</option>
            <option>p18</option>
            <option>p22</option>
            <option>p24</option>
          </select>
        </div>
        <ul
          class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex dark:divide-black dark:text-white"
        >
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-purple-300 active focus:outline-none dark:bg-purple-600 dark:text-white"
              aria-current="page"
              @click="paceSelect(8)"
              >Pace 8</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:hover:text-white dark:bg-purple-600 dark:hover:bg-gray-700"
              @click="paceSelect(12)"
              >Pace 12</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:hover:text-white dark:bg-purple-600 dark:hover:bg-gray-700"
              @click="paceSelect(15)"
              >Pace 15</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:hover:text-white dark:bg-purple-600 dark:hover:bg-gray-700"
              @click="paceSelect(18)"
              >Pace 18</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-purple-300 focus:outline-none dark:hover:text-white dark:bg-purple-600 dark:hover:bg-gray-700"
              @click="paceSelect(22)"
              >Pace 22</a
            >
          </li>
          <li class="w-full">
            <a
              href="#"
              class="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:hover:text-white dark:bg-purple-600 dark:hover:bg-gray-700"
              @click="paceSelect(24)"
              >Pace 24</a
            >
          </li>
        </ul>
      </div>
      <div
        class="inline-flex items-center bg-white leading-none ${props.textColor} rounded-full p-2 shadow text-teal text-sm mt-3"
      >
        <div
          class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center whitespace-nowrap"
        >
          Kickoff: {{ student.kickoff.toDateString() + ` ->` }}
        </div>
        <div
          class="inline-flex px-2 text-black whitespace-nowrap justify-center"
        >
          ETEC: {{ student.project.ft_transcendence.e_date.toDateString() }}
        </div>

        <div
          v-if="student.pace_chosen == 24"
          class="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700 ml-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="-ml-1 mr-1.5 h-4 w-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <p class="whitespace-nowrap text-sm">
            Dangerous territory, go back!!
          </p>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 opacity-0 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-0
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <!-- Big Cirlce Color is down here -->
            <div
              :style="{ backgroundColor: color[0] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full sm:w-24 sm:h-24"
            >
              <!-- Icon can be changed here -->
              <svg
                v-if="color[0] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[0] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Libft
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              On pace {{ student.pace_chosen }}, your're expected to validate
              {{ student.project.libft.name }} before:
              <span class="bold">
                {{ student.project.libft.e_date.toDateString() }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-1
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[1] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[1] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[1] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Born2beroot, Get_next_line, ft_printf
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.born2beroot.name }} before:
              <span class="bold">
                {{ student.project.born2beroot.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.get_next_line.name }} before:
              <span class="bold">
                {{ student.project.get_next_line.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.ft_printf.name }} before:
              <span class="bold">
                {{ student.project.ft_printf.e_date.toDateString() }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-2
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[2] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[2] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[2] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Push Swap, Pixel, Mini-Pipe
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.push_swap.name }} before:
              <span class="bold">
                {{ student.project.push_swap.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate pipex or minitalk before:
              <span class="bold">
                {{ student.project.pipex.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate so_long, fract-ol or fdf before:
              <span class="bold">
                {{ student.project.so_long.e_date.toDateString() }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-3
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[3] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[3] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[3] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Philo, Minishell
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.philosophers.name }} before:
              <span class="bold">
                {{ student.project.philosophers.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.minishell.name }} before
              <span class="bold">
                {{ student.project.minishell.e_date.toDateString() }}</span
              >
            </p>

            <div class="flex items-center space-x-1">
      <span class="flex-shrink-0 w-12 text-sm dark:text-slate-200">circle 3</span>
      <div class="flex-1 h-4 overflow-hidden rounded-sm bg-gray-300">
        <div class="bg-purple-700 h-4 w-3/6"></div>
      </div>
      <span class="flex-shrink-0 w-12 text-sm text-right dark:text-slate-200">50%</span>
    </div>
    
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-4
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[4] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[4] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[4] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Cpp, Cub-Rt, Netpractice
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.netpractice.name }} before:
              <span class="bold">
                {{ student.project.netpractice.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate cub3d or miniRT before:
              <span class="bold">
                {{ student.project.cub3d.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.cpp.name }} before:
              <span class="bold">
                {{ student.project.cpp.e_date.toDateString() }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-5
            </div>
          </div>
          <div class="w-px h-full bg-gray-300"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[5] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[5] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[5] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Inception, IRC, Containers
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.ft_containers.name }} before:
              <span class="bold">
                {{ student.project.ft_containers.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate webserv or ft_irc before:
              <span class="bold">
                {{ student.project.webserv.e_date.toDateString() }}</span
              >
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              your're expected to validate
              {{ student.project.inception.name }} before:
              <span class="bold">
                {{ student.project.inception.e_date.toDateString() }}</span
              >
            </p>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col items-center mr-6">
          <div class="w-px h-10 bg-gray-300 sm:h-full"></div>
          <div>
            <div
              class="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full dark:text-slate-200"
            >
              c-6
            </div>
          </div>
          <div class="w-px h-full opacity-0"></div>
        </div>
        <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
          <div class="sm:mr-5">
            <div
              :style="{ backgroundColor: color[6] }"
              class="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24"
            >
              <svg
                v-if="color[6] === '#00FA9A'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
                style="transform: translateY(-0.25rem)"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M16 34l8.5 8.5L36 22"
                ></path>
              </svg>
              <svg
                v-else-if="color[6] === '#8A2BE2'"
                class="w-12 h-12 text-black sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <path
                  fill="none"
                  stroke-width="3"
                  d="M14 26h24m-12-12l12 12-12 12"
                ></path>
              </svg>
              <svg
                v-else
                class="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </div>
          </div>
          <div>
            <p class="text-xl font-semibold sm:text-base dark:text-slate-200">
              Transendnece
            </p>
            <p class="text-sm text-gray-700 dark:text-slate-200">
              Your're expected to validate
              {{ student.project.ft_transcendence.name }} before:
              <span class="bold">
                {{
                  student.project.ft_transcendence.e_date.toDateString()
                }}</span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// global variable declartion in cimposable (as Mo3tasem taught me)
// const userId = useUserId();

import CircleSingleStat from './CircleSingleStat.vue';

const dateTest = new Date();
function incrimentDate(edate, num) {
  edate.setDate(edate.getDate() + num);
}

incrimentDate(dateTest, -53 - 365 - 90 - 10);
// to make kickoff to jan for testing

// after we fetch, we get the circle number, student is an object to test, the circle property is set to 3 in this example and can be changed to 7 max;
let student = ref({
  // change color to see design change
  circle: 3,
  kickoff: dateTest,
  pace_chosen: 8,
  currentpace: 0,
  lastSub: {
    name: "",
    subDate: null,
  },
  project: {
    libft: {
      name: "Libft",
      e_date: "fghj",
      circleDuration: 0,
      circleTotalDuration: 8,
      circleHours: 70,
      projectHours: 70,
    },
    ft_printf: {
      name: "ft_printf",
      e_date: "10 March 2023",
      circleDuration: 0,
      circleTotalDuration: 32,
      circleHours: 180,
      projectHours: 70,
    },
    born2beroot: {
      name: "Born2beroot",
      e_date: "17 March 2023",
      circleDuration: 0,
      circleTotalDuration: 32,
      circleHours: 180,
      projectHours: 40,
    },
    get_next_line: {
      name: "get_next_line",
      e_date: "24 march 2023",
      circleDuration: 0,
      circleTotalDuration: 32,
      circleHours: 180,
      projectHours: 70,
    },
    push_swap: {
      name: "push_swap",
      e_date: "4 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 60,
    },
    minitalk: {
      name: "minitalk",
      e_date: "11 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 50,
    },
    pipex: {
      name: "pipex",
      e_date: "11 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 50,
    },
    so_long: {
      name: "so_long",
      e_date: "18 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 60,
    },
    fdf: {
      name: "FdF",
      e_date: "18 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 60,
    },
    farctol: {
      name: "fract-ol",
      e_date: "18 April 2023",
      circleDuration: 0,
      circleTotalDuration: 54,
      circleHours: 170,
      projectHours: 60,
    },
    philosophers: {
      name: "Philosophers",
      e_date: "5 May 2023",
      circleDuration: 0,
      circleTotalDuration: 90,
      circleHours: 280,
      projectHours: 70,
    },
    minishell: {
      name: "minishell",
      e_date: "5 June 2023",
      circleDuration: 0,
      circleTotalDuration: 90,
      circleHours: 280,
      projectHours: 210,
    },
    netpractice: {
      name: "NetPractice",
      e_date: "10 June 2023",
      circleDuration: 0,
      circleTotalDuration: 141,
      circleHours: 393,
      projectHours: 50,
    },
    cub3d: {
      name: "cub3d",
      e_date: "25 June 2023",
      circleDuration: 0,
      circleTotalDuration: 141,
      circleHours: 393,
      projectHours: 280,
    },
    minirt: {
      name: "miniRT",
      e_date: "25 June 2023",
      circleDuration: 0,
      circleTotalDuration: 141,
      circleHours: 393,
      projectHours: 280,
    },
    cpp: {
      name: "CPP Modules",
      e_date: "15 July 2023",
      circleDuration: 0,
      circleTotalDuration: 141,
      circleHours: 393,
      projectHours: 63,
    },
    ft_containers: {
      name: "ft_containers",
      e_date: "15 August 2023",
      circleDuration: 0,
      circleTotalDuration: 212,
      circleHours: 525,
      projectHours: 140,
    },
    webserv: {
      name: "webserv",
      e_date: "15 September 2023",
      circleDuration: 0,
      circleTotalDuration: 212,
      circleHours: 525,
      projectHours: 175,
    },
    ft_irc: {
      name: "ft_irc",
      e_date: "15 September 2023",
      circleDuration: 0,
      circleTotalDuration: 212,
      circleHours: 525,
      projectHours: 175,
    },
    inception: {
      name: "Inception",
      e_date: "15 October 2023",
      circleDuration: 0,
      circleTotalDuration: 212,
      circleHours: 525,
      projectHours: 210,
    },
    ft_transcendence: {
      name: "ft_transcendence",
      e_date: "15 December 2023",
      circleDuration: 0,
      circleTotalDuration: 244,
      circleHours: 245,
      projectHours: 245,
    },
  },
});

function setPaceDates(ratio) {
  student.value.project.libft.circleDuration = 8;
  student.value.project.ft_printf.circleDuration = 24;
  student.value.project.born2beroot.circleDuration = 24;
  student.value.project.get_next_line.circleDuration = 24;

  student.value.project.push_swap.circleDuration = 22;
  student.value.project.minitalk.circleDuration = 22;
  student.value.project.pipex.circleDuration = 22;
  student.value.project.so_long.circleDuration = 22;
  student.value.project.fdf.circleDuration = 22;
  student.value.project.farctol.circleDuration = 22;

  student.value.project.philosophers.circleDuration = 36;
  student.value.project.minishell.circleDuration = 36;

  student.value.project.netpractice.circleDuration = 51;
  student.value.project.cub3d.circleDuration = 51;
  student.value.project.minirt.circleDuration = 51;
  student.value.project.cpp.circleDuration = 51;

  student.value.project.ft_containers.circleDuration = 71;
  student.value.project.webserv.circleDuration = 71;
  student.value.project.ft_irc.circleDuration = 71;
  student.value.project.inception.circleDuration = 71;

  student.value.project.ft_transcendence.circleDuration = 32;
}

function setPaceTwelveDate() {
  student.value.project.libft.circleDuration = 13;
  student.value.project.ft_printf.circleDuration = 35;
  student.value.project.born2beroot.circleDuration = 35;
  student.value.project.get_next_line.circleDuration = 35;

  student.value.project.push_swap.circleDuration = 33;
  student.value.project.minitalk.circleDuration = 33;
  student.value.project.pipex.circleDuration = 33;
  student.value.project.so_long.circleDuration = 33;
  student.value.project.fdf.circleDuration = 33;
  student.value.project.farctol.circleDuration = 33;

  student.value.project.philosophers.circleDuration = 53;
  student.value.project.minishell.circleDuration = 53;

  student.value.project.netpractice.circleDuration = 77;
  student.value.project.cub3d.circleDuration = 77;
  student.value.project.minirt.circleDuration = 77;
  student.value.project.cpp.circleDuration = 77;

  student.value.project.ft_containers.circleDuration = 107;
  student.value.project.webserv.circleDuration = 107;
  student.value.project.ft_irc.circleDuration = 107;
  student.value.project.inception.circleDuration = 107;

  student.value.project.ft_transcendence.circleDuration = 47;
}

function setPaceFifteenDate() {
  student.value.project.libft.circleDuration = 18;
  student.value.project.ft_printf.circleDuration = 42;
  student.value.project.born2beroot.circleDuration = 42;
  student.value.project.get_next_line.circleDuration = 42;

  student.value.project.push_swap.circleDuration = 41;
  student.value.project.minitalk.circleDuration = 41;
  student.value.project.pipex.circleDuration = 41;
  student.value.project.so_long.circleDuration = 41;
  student.value.project.fdf.circleDuration = 41;
  student.value.project.farctol.circleDuration = 41;

  student.value.project.philosophers.circleDuration = 67;
  student.value.project.minishell.circleDuration = 67;

  student.value.project.netpractice.circleDuration = 96;
  student.value.project.cub3d.circleDuration = 96;
  student.value.project.minirt.circleDuration = 96;
  student.value.project.cpp.circleDuration = 96;

  student.value.project.ft_containers.circleDuration = 134;
  student.value.project.webserv.circleDuration = 134;
  student.value.project.ft_irc.circleDuration = 134;
  student.value.project.inception.circleDuration = 134;

  student.value.project.ft_transcendence.circleDuration = 59;
}

function setPaceEighteenDate() {
  student.value.project.libft.circleDuration = 24;
  student.value.project.ft_printf.circleDuration = 48;
  student.value.project.born2beroot.circleDuration = 48;
  student.value.project.get_next_line.circleDuration = 48;

  student.value.project.push_swap.circleDuration = 49;
  student.value.project.minitalk.circleDuration = 49;
  student.value.project.pipex.circleDuration = 49;
  student.value.project.so_long.circleDuration = 49;
  student.value.project.fdf.circleDuration = 49;
  student.value.project.farctol.circleDuration = 49;

  student.value.project.philosophers.circleDuration = 80;
  student.value.project.minishell.circleDuration = 80;

  student.value.project.netpractice.circleDuration = 115;
  student.value.project.cub3d.circleDuration = 115;
  student.value.project.minirt.circleDuration = 115;
  student.value.project.cpp.circleDuration = 115;

  student.value.project.ft_containers.circleDuration = 162;
  student.value.project.webserv.circleDuration = 162;
  student.value.project.ft_irc.circleDuration = 162;
  student.value.project.inception.circleDuration = 162;

  student.value.project.ft_transcendence.circleDuration = 70;
}

function setPaceTwentyTwoDate() {
  student.value.project.libft.circleDuration = 30;
  student.value.project.ft_printf.circleDuration = 58;
  student.value.project.born2beroot.circleDuration = 58;
  student.value.project.get_next_line.circleDuration = 58;

  student.value.project.push_swap.circleDuration = 60;
  student.value.project.minitalk.circleDuration = 60;
  student.value.project.pipex.circleDuration = 60;
  student.value.project.so_long.circleDuration = 60;
  student.value.project.fdf.circleDuration = 60;
  student.value.project.farctol.circleDuration = 60;

  student.value.project.philosophers.circleDuration = 98;
  student.value.project.minishell.circleDuration = 98;

  student.value.project.netpractice.circleDuration = 141;
  student.value.project.cub3d.circleDuration = 141;
  student.value.project.minirt.circleDuration = 141;
  student.value.project.cpp.circleDuration = 141;

  student.value.project.ft_containers.circleDuration = 197;
  student.value.project.webserv.circleDuration = 197;
  student.value.project.ft_irc.circleDuration = 197;
  student.value.project.inception.circleDuration = 197;

  student.value.project.ft_transcendence.circleDuration = 86;
}

function setPaceTwentyFourDate() {
  student.value.project.libft.circleDuration = 26;
  student.value.project.ft_printf.circleDuration = 70;
  student.value.project.born2beroot.circleDuration = 70;
  student.value.project.get_next_line.circleDuration = 70;

  student.value.project.push_swap.circleDuration = 66;
  student.value.project.minitalk.circleDuration = 66;
  student.value.project.pipex.circleDuration = 66;
  student.value.project.so_long.circleDuration = 66;
  student.value.project.fdf.circleDuration = 66;
  student.value.project.farctol.circleDuration = 66;

  student.value.project.philosophers.circleDuration = 106;
  student.value.project.minishell.circleDuration = 106;

  student.value.project.netpractice.circleDuration = 154;
  student.value.project.cub3d.circleDuration = 154;
  student.value.project.minirt.circleDuration = 154;
  student.value.project.cpp.circleDuration = 154;

  student.value.project.ft_containers.circleDuration = 214;
  student.value.project.webserv.circleDuration = 214;
  student.value.project.ft_irc.circleDuration = 214;
  student.value.project.inception.circleDuration = 214;

  student.value.project.ft_transcendence.circleDuration = 94;
}

function resetDates() {
  let prev = 0;

  student.value.project.libft.e_date = new Date(student.value.kickoff);
  prev =
    (student.value.project.libft.projectHours /
      student.value.project.libft.circleHours) *
    student.value.project.libft.circleDuration;
  incrimentDate(student.value.project.libft.e_date, prev);

  student.value.project.born2beroot.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.born2beroot.e_date,
    (student.value.project.born2beroot.projectHours /
      student.value.project.born2beroot.circleHours) *
      student.value.project.born2beroot.circleDuration +
      prev
  );
  prev =
    (student.value.project.born2beroot.projectHours /
      student.value.project.born2beroot.circleHours) *
      student.value.project.born2beroot.circleDuration +
    prev;

  student.value.project.get_next_line.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.get_next_line.e_date,
    (student.value.project.get_next_line.projectHours /
      student.value.project.get_next_line.circleHours) *
      student.value.project.get_next_line.circleDuration +
      prev
  );
  prev =
    (student.value.project.get_next_line.projectHours /
      student.value.project.get_next_line.circleHours) *
      student.value.project.get_next_line.circleDuration +
    prev;

  student.value.project.ft_printf.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.ft_printf.e_date,
    (student.value.project.ft_printf.projectHours /
      student.value.project.ft_printf.circleHours) *
      student.value.project.ft_printf.circleDuration +
      prev
  );
  prev =
    (student.value.project.ft_printf.projectHours /
      student.value.project.ft_printf.circleHours) *
      student.value.project.ft_printf.circleDuration +
    prev;

  student.value.project.push_swap.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.push_swap.e_date,
    (student.value.project.push_swap.projectHours /
      student.value.project.push_swap.circleHours) *
      student.value.project.push_swap.circleDuration +
      prev
  );
  prev =
    (student.value.project.push_swap.projectHours /
      student.value.project.push_swap.circleHours) *
      student.value.project.push_swap.circleDuration +
    prev;

  student.value.project.pipex.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.pipex.e_date,
    (student.value.project.pipex.projectHours /
      student.value.project.pipex.circleHours) *
      student.value.project.pipex.circleDuration +
      prev
  );
  prev =
    (student.value.project.pipex.projectHours /
      student.value.project.pipex.circleHours) *
      student.value.project.pipex.circleDuration +
    prev;

  student.value.project.so_long.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.so_long.e_date,
    (student.value.project.so_long.projectHours /
      student.value.project.so_long.circleHours) *
      student.value.project.so_long.circleDuration +
      prev
  );
  prev =
    (student.value.project.so_long.projectHours /
      student.value.project.so_long.circleHours) *
      student.value.project.so_long.circleDuration +
    prev;

  student.value.project.philosophers.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.philosophers.e_date,
    (student.value.project.philosophers.projectHours /
      student.value.project.philosophers.circleHours) *
      student.value.project.philosophers.circleDuration +
      prev
  );
  prev =
    (student.value.project.philosophers.projectHours /
      student.value.project.philosophers.circleHours) *
      student.value.project.philosophers.circleDuration +
    prev;

  student.value.project.minishell.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.minishell.e_date,
    (student.value.project.minishell.projectHours /
      student.value.project.minishell.circleHours) *
      student.value.project.minishell.circleDuration +
      prev
  );
  prev =
    (student.value.project.minishell.projectHours /
      student.value.project.minishell.circleHours) *
      student.value.project.minishell.circleDuration +
    prev;

  student.value.project.netpractice.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.netpractice.e_date,
    (student.value.project.netpractice.projectHours /
      student.value.project.netpractice.circleHours) *
      student.value.project.netpractice.circleDuration +
      prev
  );
  prev =
    (student.value.project.netpractice.projectHours /
      student.value.project.netpractice.circleHours) *
      student.value.project.netpractice.circleDuration +
    prev;

  student.value.project.cub3d.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.cub3d.e_date,
    (student.value.project.cub3d.projectHours /
      student.value.project.cub3d.circleHours) *
      student.value.project.cub3d.circleDuration +
      prev
  );
  prev =
    (student.value.project.cub3d.projectHours /
      student.value.project.cub3d.circleHours) *
      student.value.project.cub3d.circleDuration +
    prev;

  student.value.project.cpp.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.cpp.e_date,
    (student.value.project.cpp.projectHours /
      student.value.project.cpp.circleHours) *
      student.value.project.cpp.circleDuration +
      prev
  );
  prev =
    (student.value.project.cpp.projectHours /
      student.value.project.cpp.circleHours) *
      student.value.project.cpp.circleDuration +
    prev;

  student.value.project.ft_containers.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.ft_containers.e_date,
    (student.value.project.ft_containers.projectHours /
      student.value.project.ft_containers.circleHours) *
      student.value.project.ft_containers.circleDuration +
      prev
  );
  prev =
    (student.value.project.ft_containers.projectHours /
      student.value.project.ft_containers.circleHours) *
      student.value.project.ft_containers.circleDuration +
    prev;

  student.value.project.webserv.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.webserv.e_date,
    (student.value.project.webserv.projectHours /
      student.value.project.webserv.circleHours) *
      student.value.project.webserv.circleDuration +
      prev
  );
  prev =
    (student.value.project.webserv.projectHours /
      student.value.project.webserv.circleHours) *
      student.value.project.webserv.circleDuration +
    prev;

  student.value.project.inception.e_date = new Date(student.value.kickoff);
  incrimentDate(
    student.value.project.inception.e_date,
    (student.value.project.inception.projectHours /
      student.value.project.inception.circleHours) *
      student.value.project.inception.circleDuration +
      prev
  );
  prev =
    (student.value.project.inception.projectHours /
      student.value.project.inception.circleHours) *
      student.value.project.inception.circleDuration +
    prev;

  student.value.project.ft_transcendence.e_date = new Date(
    student.value.kickoff
  );
  incrimentDate(
    student.value.project.ft_transcendence.e_date,
    (student.value.project.ft_transcendence.projectHours /
      student.value.project.ft_transcendence.circleHours) *
      student.value.project.ft_transcendence.circleDuration +
      prev
  );
  prev =
    (student.value.project.ft_transcendence.projectHours /
      student.value.project.ft_transcendence.circleHours) *
      student.value.project.ft_transcendence.circleDuration +
    prev;
}

setPaceDates(0);
resetDates();

const dayMs = 86400000;

student.value.lastSub.name = "Libft";
student.value.lastSub.subDate = new Date();

function getDateDiff(start, end) {
  const dayMs = 86400000;
  let num = (start.getTime() - end.getTime()) / dayMs;
  return Math.abs(num);
}

incrimentDate(student.value.lastSub.subDate, -508);
console.log(
  getDateDiff(student.value.project.libft.e_date, student.value.lastSub.subDate)
);
function determinePace() {
  if (student.value.lastSub == null) return;

  if (student.value.lastSub.name == student.value.project.libft.name) {
    const num = getDateDiff(
      student.value.lastSub.subDate,
      student.value.project.libft.e_date
    );
    if (num <= 8) console.log("you're on pace 8");
    else if (num <= 13) console.log("you're on pace 12");
    else if (num <= 18) console.log("you're on pace 15");
    else if (num <= 24) console.log("you're on pace 18");
    else if (num <= 30) console.log("you're on pace 22");
    else
      console.log(
        `you're on ${student.value.project.libft.name} you're on pace 24`
      );
  } else if (
    student.value.lastSub.name == student.value.project.ft_printf.name
  ) {
    //left here after I got stuck on which I sould take as the last submitted project date
    const num = getDateDiff(
      student.value.lastSub.subDate,
      student.value.project.ft_printf.e_date
    );
    console.log(
      `you're on ${student.value.project.ft_printf.name} you're on pace 24`
    );
  }
}

determinePace();

function paceSelect(thisPace) {
  // since we used thge ref keyword, we should not
  // accesss the value using satudent.pace_chose but using student.value.pace_chosen
  // let startDate = student.value.kickoff;

  student.value.pace_chosen = thisPace;
  if (thisPace == 8) {
    setPaceDates(0);
    resetDates();
  } else if (student.value.pace_chosen == 12) {
    setPaceDates(0);
    setPaceTwelveDate();
    resetDates();
  } else if (student.value.pace_chosen == 15) {
    setPaceDates(0);
    setPaceFifteenDate();
    resetDates();
  } else if (student.value.pace_chosen == 18) {
    setPaceDates(0);
    setPaceEighteenDate();
    resetDates();
  } else if (student.value.pace_chosen == 22) {
    setPaceDates(0);
    setPaceTwentyTwoDate();
    resetDates();
  } else if (student.value.pace_chosen == 24) {
    setPaceDates(0);
    setPaceTwentyFourDate();
    resetDates();
  }
}

// we are destructuring the circle propert from the student object and setting it to num
const { circle: num, pace_chosen: pace } = student.value;

// this is an array of the color of each circle, there are 7 elements from 0 to 6 corresponding to circle numbers, they're all
// set to the color 42 theme grey
let color = [
  "#A9A9A9",
  "#A9A9A9",
  "#A9A9A9",
  "#A9A9A9",
  "#A9A9A9",
  "#A9A9A9",
  "#A9A9A9",
];

// loop untill the current cirle and mark every completed cirlce with color green
let i;
for (i = 0; i < num; i++) {
  color[i] = "#00FA9A";
}

// mark the current circle with blue
color[i] = "#8A2BE2";
</script>

<style scoped>
.bold {
  font-weight: bold;
}
</style>
