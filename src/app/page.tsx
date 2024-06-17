import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Name: Shreyash Pingle <br />
          Age: 21 <br />
          Academics: CS senior year undergrad <br />
          University: Not worth mentioning
        </p>
      </div>

      <div className="absolute top-[50%] right-[10%]">
        <p>
          Projects: <br />
          {'->'} Connect Logi <br/>
          {'->'} SweetStreaks <br/>
          {'->'} MealConnect <br/>
          {'->'} SirfSale <br/>
        </p>
      </div>

      <div className="absolute top-[50%] left-[10%]">
        <p>
          Blogs: <br />
          {'->'} <a href="https://dev.to/shrey802/connect-logi-logistics-one-stop-saas-platform-39jo">internship</a> <br/>
          {'->'} <a href="https://dev.to/shrey802/my-first-freelance-gig-building-an-e-commerce-store-3kp5">freelance </a>
        </p> <br/>
        <p>
          Resume: <br />
          {'->'} <a href="https://drive.google.com/file/d/1P0WVZdQtWiTTcL_eajIU9Mdvfvv8v9ii/view">resume</a> <br/>
        </p>
      </div>


      <div className="absolute top-[20%] right-[20%]">
        <p>
          Socials: <br />
          {'->'} <a href="https://www.linkedin.com/in/shreyash-pingle-902133215/">LinkedIn</a> <br/>
          {'->'} <a href="https://github.com/shrey802">GitHub</a> <br/>
          {'->'} <a href="https://twitter.com/ShreyashPingle">Twitter</a> <br/>
          Mail me @ {'->'}shreypingle23@gmail.com
        </p>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative"
          src="/image.png"
          alt="Shreyash Logo"
          width={450}
          height={70}
        />
      </div>

    </main>
  );
}
