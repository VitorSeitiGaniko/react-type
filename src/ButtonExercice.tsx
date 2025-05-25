import React from 'react'

type ButtonExerciceProps = React.ComponentProps<'button'> & {
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
}

function ButtonExercice({ total, setTotal }: ButtonExerciceProps) {
    return (
        <button onClick={() => setTotal((t) => t + 1)}>Incrementar {total}</button>
    );
}

export default ButtonExercice