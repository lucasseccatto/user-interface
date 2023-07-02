import styled from 'styled-components';

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 70px;

  background: ${(rest) =>
    rest.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8) '};
  border-radius: 14px;
  border: ${(rest) => (rest.isBack ? '1px solid #ffffff' : 'none')};
  cursor: pointer;

  font-size: 17px;
  line-height: 28px;

  color: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  img {
    transform: ${(rest) => rest.isBack && 'rotateY(180deg)'};
  }
`;
