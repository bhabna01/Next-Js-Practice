import Navbar from "@/components/navbar";
import Image from "next/image";

import image1 from "@/assets/130986.jpg"
import Categories from "@/components/HomePage/categories";
const HomePage = () => {
  return (
    <main >
      <Navbar></Navbar>
      <h1>Home</h1>
      <Image width={600} height={400} src={image1} placeholder='blur' alt=""></Image>
      <Categories></Categories>

    </main>
  )
}
export default HomePage