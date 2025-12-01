import './App.css'
import GDGClogo from '../public/google-developers-seeklogo.svg'  

function App() {

  return (
    <div className='bg-gray-900 text-white h-screen flex flex-col justify-center items-center gap-6'>

      <img src={GDGClogo} alt="GDGC-ACE" className='w-20 mb-10'/>

      <p className='text-4xl font-extrabold tracking-widest'>GDGC Vacation Project</p>

      <p className='text-2xl'>Creating a DevOps ChatBot</p>

      <ol className='list-decimal space-y-2'>
        <li>A basic start.</li>
        <li>Would help you throughout the DevOps journey.</li>
        <li>Good flex in this era of AI.</li>
        {/* <li>Integrates practical DevOps workflows like CI/CD, monitoring, and infrastructure automation.</li> */}
        <li>Reduces troubleshooting time by offering actionable, step-by-step fixes.</li>
        <li>Accelerates learning for cloud, automation, and SRE (Software Reliability Engineering) methodologies.</li>
        <li>Strengthens interview presence by demonstrating applied DevOps and AI integration.</li>
        <li>Serves as a real-world portfolio project reflecting modern engineering practices.</li>
      </ol>

    </div>
  )
}

export default App
