import './App.css';

import GDGClogo from '../public/google-developers-seeklogo.svg';

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 px-4 text-white">
      {/* Use items-start on mobile so left-aligned content doesn't look off (list numbers), keep items centered on md+ */}
      <div className="flex w-full max-w-6xl flex-col items-start gap-8 py-12 md:flex-row md:items-center">
        {/* Logo: center on mobile (mx-auto), align to start on larger screens */}
        <div className="logo mx-auto shrink-0 md:mx-0">
          <img
            src={GDGClogo}
            alt="GDGC-ACE"
            className="mb-4 w-20 sm:w-24 md:mb-0 md:w-28 lg:w-32"
          />
        </div>

        {/* Main content area: mobile-first left alignment for readability on small screens */}
        <main
          className="content flex-1 text-left"
          role="main"
        >
          <h1 className="text-2xl font-extrabold tracking-widest sm:text-3xl md:text-4xl lg:text-5xl">
            GDGC Vacation Project
          </h1>

          <h2 className="mt-2 text-lg font-medium sm:text-xl md:text-2xl">
            Creating a DevOps ChatBot
          </h2>

          {/* Ordered list with responsive behavior: use list-outside and left padding on small screens to keep numbers visible, grid on lg devices */}
          <ol className="mx-0 mt-4 w-full max-w-xl list-outside list-decimal space-y-2 pl-6 text-sm sm:text-base md:pl-0 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0">
            <li>A basic start.</li>
            <li>Would help you throughout the DevOps journey.</li>
            <li>Good flex in this era of AI.</li>
            {/* <li>Integrates practical DevOps workflows like CI/CD, monitoring, and infrastructure automation.</li> */}
            <li>
              Reduces troubleshooting time by offering actionable, step-by-step
              fixes.
            </li>
            <li>
              Accelerates learning for cloud, automation, and SRE (Software
              Reliability Engineering) methodologies.
            </li>
            <li>
              Strengthens interview presence by demonstrating applied DevOps and
              AI integration.
            </li>
            <li>
              Serves as a real-world portfolio project reflecting modern
              engineering practices.
            </li>
          </ol>
        </main>
      </div>
    </div>
  );
}

export default App;
