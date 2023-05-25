import Image from 'next/image'
import Me from '../../public/images/me-circle.png'
import GitHub from '../../public/images/github-logo.png'
import Twitter from '../../public/images/twitter-logo.png'
import LinkedIn from '../../public/images/linkedin-logo.png'
import { Nav } from './components'

const Home = () => {
  return (
    <div className="flex">
      <div className="flex flex-none flex-col justify-center bg-black w-1/6 fixed h-screen">
        <Nav />
      </div>
      <div className="flex-auto">
        <div className="flex justify-center items-center min-h-screen pl-40">
          <div className="relative flex flex-col gap-2 items-center">
            <Image width="200" src={Me} alt="photo of colten van tussenbrook" />
            <p className="font-semibold text-5xl">
              Hey, I&apos;m Colten Van Tussenbrook
            </p>
            <p className="text-lg">
              I&apos;m a fullstack software engineer working mostly with React
              and Node.js
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/ColtenVanTussenbrook">
                <Image src={GitHub} alt="github logo" />
              </a>
              <a
                className="pt-1"
                href="https://www.linkedin.com/in/coltenvantussenbrook/"
              >
                <Image src={LinkedIn} alt="linkedin logo" />
              </a>
              <a href="https://twitter.com/coltvant">
                <Image src={Twitter} alt="twitter logo" />
              </a>
            </div>
            <div>Download Resume (PDF)</div>
          </div>
        </div>
        <div>some other content</div>
      </div>
    </div>
  )
}
export default Home
