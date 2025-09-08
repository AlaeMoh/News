"use client"
import Home1 from "../app/(Pages)/home/page"
import Political from "../app/(Pages)/politicals/page"
import Toggles from "../app/(Pages)/toggles/page"
export default function Home() {
  return (
    <div >
      <Toggles></Toggles>
    <Home1></Home1>
    <Political></Political>
    </div>
  );
}