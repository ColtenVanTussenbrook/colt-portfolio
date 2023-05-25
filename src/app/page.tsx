import Image from 'next/image'
import Me from '../../public/images/me-circle.png'
import GitHub from '../../public/images/github-logo.png'
import Twitter from '../../public/images/twitter-logo.png'
import LinkedIn from '../../public/images/linkedin-logo.png'

const Home = () => {
  return (
    <div className="flex">
      <div>hello</div>
      <main className="flex flex-1 min-h-screen flex-col items-center justify-center p-24">
        <div className="relative flex flex-col gap-2 place-items-center ">
          <Image width="200" src={Me} alt="photo of colten van tussenbrook" />
          <p className="font-semibold">Hey, I&apos;m Colten Van Tussenbrook</p>
          <p>
            I&apos;m a fullstack software engineer working mostly with React and
            Node.js
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/ColtenVanTussenbrook">
              <Image src={GitHub} alt="github logo" />
            </a>
            <a href="https://www.linkedin.com/in/coltenvantussenbrook/">
              <Image src={LinkedIn} alt="linkedin logo" />
            </a>
            <a href="https://twitter.com/coltvant">
              <Image src={Twitter} alt="twitter logo" />
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}
export default Home
