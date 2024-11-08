import React, { useState } from 'react';

function PrimeNumberRenderer() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);
  const [primes, setPrimes] = useState([]);

  // Function to check if a number is prime
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // Function to generate prime numbers within the selected range
  const generatePrimes = () => {
    const primesArray = [];
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primesArray.push(i);
      }
    }
    setPrimes(primesArray); 
  };

  return (
    <div>
      <h2>Prime Number Generator</h2>
      <div>
        <label>Start Number:</label>
        <input type="number" value={start} onChange={(e) => setStart(Number(e.target.value))} />
      </div>
      <div>
        <label>End Number:</label>
        <input type="number" value={end} onChange={(e) => setEnd(Number(e.target.value))} />
      </div>
      <button onClick={generatePrimes}>Generate Primes</button>

      <div>
        <h3>Prime Numbers:</h3>
        <ul>
          {primes.map((prime, index) => (
            <li key={index}>{prime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PrimeNumberRenderer;