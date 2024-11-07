import { useState } from 'react'
import Cancel from './components/Cancel'
import FirstSection from './components/FirstSection'

function App() {
	const [num, setNum] = useState(0) //huki
	return (
		<div className='App'>
			<FirstSection num={num} setNum={setNum} />
			<Cancel setNum={setNum} />
		</div>
	)
}

export default App;
