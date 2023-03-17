import { Navbar } from "flowbite-react"
import { Link } from "react-router-dom"


export default function Navbar1(){
    return(
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand

    to="/navbars"
  >
    <img
      src="https://s3-eu-west-1.amazonaws.com/ie.smooth.careers-logo/ErnPJ-0mjSfZ8-Go"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      FullyFilmy
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
  <Link to="/">
      Home
      </Link>
   <Link to="/wishlist">
      Wishlist
      </Link>
      <Link to="/shoppingcart">
      Shopping Cart
      </Link>
      <Link to="/checkout">
      Checkout
      </Link>
    <Navbar.Link href="/navbars">
      Track My Order
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    )
}