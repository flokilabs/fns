import Button from '../components/Button'
import Layout from '../components/Layout'
import { useAuth } from '../providers/AuthProvider'

export default function Home() {
  const { user, loggedIn, logIn, logOut } = useAuth()
  console.log(user, loggedIn)

  return (
    <Layout>
      <main id="start-of-content" class="w-full mx-auto mt-6 mb-16 sm:mt-8 px-2.5 lg:px-7 max-w-screen-md">
        <div class="flex justify-between px-2.5 lg:px-0 items-center">
          <h1 class="text-gray-700 text-2xl font-normal">Your Names</h1>
          <div class="flex items-stretch gap-4">
            <button class="transition inline-block focus-visible:ring-2 focus-visible:ring-black focus:outline-none py-2.5 px-6 text-base text-gray-600 font-medium  border border-gray-300 rounded-xl hover:shadow hidden lg:inline h-full" alternate="true" title="Create a new playground" >New Playground</button>

            <a alternate="true" href="/new" small="true" id="new" class="transition inline-block focus-visible:ring-2 focus-visible:ring-black focus:outline-none py-2.5 px-6 text-base text-gray-600 font-medium  border border-gray-300 rounded-xl hover:shadow h-full">+&nbsp;&nbsp;&nbsp;New Project</a>
          </div>
        </div>
        <div class="mt-4"><div>
          <div class="min-w-full">
            <a class="flex flex-col lg:flex-row lg:items-center w-full bg-white rounded-2xl transition shadow-slight hover:shadow-lg backdrop-filter backdrop-blur-3xl p-8 lg:p-10 mt-4" href="/projects/warm-ant-46">
              <div class="flex items-center">
                <img class="h-14 w-14 mr-6 lg:mr-8" src="/img/avatars/1.png" alt="Project Avatar of 8a71da08-6c11-47ab-a25a-24f4b2ebec58" />
                <div>
                  <h4 class="font-medium text-xl">warm-ant-46</h4>
                </div>
              </div>
              <Button>View</Button>

              <p class="text-gray-400 text-sm text-center lg:ml-auto mt-4 lg:mt-0">Last updated <span title="Fri, June 11, 2021, 8:15:09 AM">4 mo. ago</span></p>
            </a>
          </div>
        </div>
        </div>
      </main>
    </Layout>

  )
}
