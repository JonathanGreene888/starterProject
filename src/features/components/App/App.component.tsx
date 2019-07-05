import React from 'react';
import GameBoard from '../GameBoard/GameBoard.component';

export const sum = (a: number, b: number) => {
    return a + b;
};

const App: React.FC = () => {
    return (
        <div>
            <GameBoard />
        </div>
    );
};

export default App;
