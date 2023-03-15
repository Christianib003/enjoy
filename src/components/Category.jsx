import { FaPizzaSlice, FaHumberger } from 'react-icons/fa';
import { GiNoodles, GiChopSticks } from 'react-icons/gi';
import styled from 'styled-components';

function Category() {
  return (
    <div>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <FaHumberger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopSticks />
        <h4>Japanese</h4>
      </div>
    </div>
  );
}
