import { useState } from 'react'

const FirstSection = props => {
	const { num, setNum } = props;

    const plus = () => {
        setNum(Math.min(num + 1, 20));
    }
    const plusFive = () => {
        setNum(Math.min(num + 5, 20));
    }
    const minus = () => {
        setNum(Math.max(num - 1, 0));
    }
    const minusFive = () => {
        setNum(Math.max(num - 5, 0));
    }

	return (
		<div>
			<p>{num}</p>
			<button onClick={plus}>+</button>
			<button onClick={minus}>-</button>
            <button onClick={plusFive}>+5</button>
            <button onClick={minusFive}>-5</button>
		</div>
	)
}

export default FirstSection
