"use client"
import { useState, useEffect } from "react"
import Intro from '@/components/home/Intro'
import Loading from "./loading";
import MouseInvertSpot from '@/components/MouseLight';

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 3초
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mx-auto flex px-5 py-10 md:flex-row flex-col-reverse items-center">
      <Intro />
    </div>
  );
}
{/* <MouseInvertSpot size={80} softEdge={80} strength={1} /> */ }