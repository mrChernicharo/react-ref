import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Input from '../components/Input';
import Square from '../components/Square';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6]);

  const handleIncrement = useCallback(() => {
    const addedSquares = [...squares, squares.length + 1];
    setSquares(addedSquares);
  }, [squares]);

  const handleDecrement = useCallback(() => {
    const last = squares.length;
    const copy = [...squares];
    copy.splice(last - 1, 1);

    setSquares(copy);
  }, [squares]);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {squares.map((square, i) => (
          <Square key={i} />
        ))}
      </div>

      <button onClick={handleIncrement}>add</button>
      <button onClick={handleDecrement}>remove</button>
    </div>
  );
}
