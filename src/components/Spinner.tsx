import styled, { keyframes } from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerElement />
    </SpinnerContainer>
  );
};

const loading = keyframes`
  0% {
    transform: rotate(0deg);
    border-top-color: #ccc;
  }
  25% {
    transform: rotate(180deg);
    border-top-color: #000;
  }
  50% {
    transform: rotate(180deg);
    border-top-color: #000;
  }
  75% {
    transform: rotate(360deg);
    border-top-color: #ccc;
  }
  100% {
    transform: rotate(360deg);
    border-top-color: #ccc;
  }
`;

const SpinnerContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: relative;
`;

const SpinnerElement = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid #ccc;
  border-radius: 50%;
  animation: ${loading} 1s infinite linear;
`;

export default Spinner;
