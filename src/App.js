import react, { useState } from "react"

function App() {
	const [openSidebar, setOpenSidebar] = useState(false)
	const [openClick, setOpenClick] = useState(false)

	const openClickSidebar = () => {
		setOpenSidebar(true)
	}

	const handleOpenClick = () => {
		setOpenClick(true)
	}

	console.log(openSidebar)

	return (
		<div className='App'>
			<div className='wrapper h-screen flex overflow-hidden relative'>
				{/* sidebar */}
				<div>
					<div
						className={`absolute top-0 left-0 right-0 bottom-0 z-20 bg-gray-500/50 ${
							openSidebar ? "block lg:hidden" : "hidden"
						}`}
						onClick={() => setOpenSidebar(false)}
					></div>
					<div
						className={`bg-red-200 w-[250px] lg:static absolute z-40 h-screen overflow-y-scroll no-scrollbar p-5 transition-all duration-300 ease-out ${
							openSidebar
								? "translate-x-0"
								: "lg:translate-x-0 -translate-x-[250px]"
						}`}
					>
						<div class='bg-red-100 h-[1000px]'>
							<div
								class='h-12 w-12 bg-slate-400 lg:hidden block cursor-pointer'
								onClick={() => setOpenSidebar(false)}
							></div>
						</div>
					</div>
				</div>
				{/* main-content */}
				<div className='w-full bg-blue-300 relative overflow-y-auto overflow-x-hidden'>
					{/* navbar */}
					<div className='w-full h-[72px] bg-orange-200 sticky top-0 z-10 p-2'>
						<div
							class='h-full w-14 bg-lime-500 cursor-pointer lg:hidden block'
							onClick={openClickSidebar}
						></div>
					</div>
					{/* content */}
					<div class='flex relative '>
						{/* sidebar in content */}
						<div
							class={`md:w-[350px] w-full md:min-w-0 min-w-full h-[calc(100vh_-_72px)] sticky top-[72px] bg-green-300 overflow-y-scroll no-scrollbar transition-all duration-300 ease-out ${
								openClick
									? "md:translate-x-0 -translate-x-full"
									: "translate-x-0"
							}`}
						>
							{/* header */}
							<div className='sticky w-full h-[64px] bg-teal-200 top-0'></div>
							{/* body */}
							<div className='px-5  pb-5'>
								<div
									className='bg-teal-300 h-16 cursor-pointer'
									onClick={handleOpenClick}
								></div>
								<div class='bg-green-100 h-[1000px]'></div>
							</div>
						</div>
						{/* content sidebar */}
						<div
							className={`w-full md:min-w-0 min-w-full flex flex-col bg-purple-500 transition-all duration-300 ease-out $ ${
								openClick
									? "md:translate-x-0 -translate-x-full"
									: "translate-x-0"
							}`}
						>
							{/* header */}
							<div className='sticky w-full h-[64px] bg-indigo-200 top-[72px] p-2'>
								<div
									className='w-12 h-full bg-amber-200 cursor-pointer md:hidden block'
									onClick={() => setOpenClick(false)}
								></div>
							</div>
							{/* body */}
							<div class=' bg-violet-300 grow'>
								<div className='px-5'>
									<div className='w-full h-24 bg-blue-50'></div>
									<div className='w-full h-24 bg-blue-100'></div>
									<div className='w-full h-24 bg-blue-200'></div>
									<div className='w-full h-24 bg-blue-300'></div>
									<div className='w-full h-24 bg-blue-400'></div>
									<div className='w-full h-24 bg-blue-500'></div>
									<div className='w-full h-24 bg-blue-600'></div>
									<div className='w-full h-24 bg-blue-700'></div>
									<div className='w-full h-24 bg-blue-800'></div>
								</div>
							</div>
							{/* footer */}
							<div className='sticky w-full h-[64px] bg-lime-200 bottom-0'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
