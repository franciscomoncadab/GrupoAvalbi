import React from 'react'
import { Button, Navbar, Dropdown } from 'flowbite-react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <Navbar
  fluid={true}
  rounded={true}
  className="bg-gray-800 text-white"
>
  <Navbar.Brand href="https://flowbite.com/">
    <Image src={require("/public/static/img/navbarLogo.png")} alt="Abalvi" width={150} height={30} />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Abalvi
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2">
  <Dropdown
    label="Galerias"
    size="sm"
  >
    <Dropdown.Item>
      Inmobiliaria
    </Dropdown.Item>
    <Dropdown.Item>
      Tech
    </Dropdown.Item>
    <Dropdown.Item>
      Barber
    </Dropdown.Item>
  </Dropdown>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/"
      active={true}
    >
      Inicio
    </Navbar.Link>
    <Navbar.Link href="/sobreNosotros">
      Sobre Nosotros
    </Navbar.Link>
    <Navbar.Link href="/contacto">
      Contacto
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar