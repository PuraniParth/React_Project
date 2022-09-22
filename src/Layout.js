import { Link,Outlet } from "react-router-dom"
 import bootstrap from 'bootstrap'
import './index.css';
export default function Layout(){
    return(<>


<div class="collapse" id="navbarToggleExternalContent">
<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Darshan university</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900"><Link to="/home" >Home</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="/students" >Students</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="/aboutus" >About us</Link></a>
      <a class="mr-5 hover:text-gray-900"><Link to="students/Addstudent">Addstudent</Link></a>
    </nav>
  </div>
</header>
</div>
<nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>

      <div className='Outlet'>
        <Outlet/>
      </div>

      <div className="sticky">
      <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 ">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Darshan university</span>
      </a>
      <p class="mt-2 text-sm text-gray-500">having the foundation of its first Institution laid in 2009</p>
    </div>
    <div class="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first ">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">students</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Circulars</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Darshan UMS App (Android)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Darshan UMS App (iPhone)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">DLib App (Android)</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 " >
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">For Others</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Journal : IJDI-ERET</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Journal : DIJCM</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Consultancy - Civil / Environment (CCC)</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">Consultancy - Electrical (EMC)</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4 ">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">our contacts</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-gray-600 hover:text-gray-800">Rajkot - Morbi Highway,Gujarat</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">home</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">about</a>
          </li>
          <li>
            <a class="text-gray-600 hover:text-gray-800">students</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
</div>

    </>)
  } 