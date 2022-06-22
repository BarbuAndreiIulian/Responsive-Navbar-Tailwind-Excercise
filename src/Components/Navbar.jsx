import React ,{useState} from 'react'


const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <div className='navbar'>
      <div className="nav-container  bg-black flex justify-between p-5 md:pt-[44px] lg:pl-16">

        <div className="logo">
          Logo
        </div>


        <div className={`nav-links hidden absolute top-16 w-full  -ml-5 flex-col items-center text-center 
        lg:flex lg:mr-auto lg:static lg:w-auto lg:m-0 lg:flex-row  lg:justify-between lg:w-full lg:ml-16 lg:mr-16 ${show? "sm:flex" : "xyz"} `}>

          <div className="nav-links-info mt-4 lg:mt-0  ">
            <ul className='lg:flex'>
              <li className='mt-1 lg:mt-0 lg:mx-12'><a href="#">Portfolio</a></li>
              <li className='mt-1 lg:mt-0 lg:mx-12'><a href="#">CV</a></li>
              <li className='mt-1 lg:mt-0 lg:mx-12'><a href="#">About</a></li>
              <li className='mt-1 lg:mt-0 lg:mx-12'><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className="nav-links-join mt-12 mb-4 lg:m-0   ">
            <ul className='lg:flex '>
              <li className='mt-1 lg:m-0  lg:mx-12'><a href="#">LogIn</a></li>
              <li className='mt-1 lg:m-0  lg:ml-12'><a href="#">SignUp</a></li>
            </ul>
          </div>

        </div>

        <div className="burger lg:hidden">
          <div className="menu">
            <button onClick={() => setShow(!show)}>Menu</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar