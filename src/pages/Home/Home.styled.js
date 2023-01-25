import styled from 'styled-components';

export const SlideEffect = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  width: 100%;
`;

export const Text = styled.div`
  position: relative;
  top: 40px;
  opacity: 0;
  font-size: 35px;
  animation: slideUp ease 0.4s forwards;
`;
export const SlideDown = styled.div`
  position: relative;
  top: -40px;
  left: 5px;
  opacity: 0;
  font-size: 35px;
  animation: slideDown ease 0.4s forwards 0.6s;

  @keyframes slideDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(40px);
      opacity: 1;
    }
  }
`;
export const SlideUp = styled.div`
  position: relative;
  top: 40px;
  left: 10px;
  opacity: 0;
  font-size: 35px;
  animation: slideUp ease 0.5s forwards 1.2s;

  @keyframes slideUp {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-40px);
      opacity: 1;
    }
  }
`;
