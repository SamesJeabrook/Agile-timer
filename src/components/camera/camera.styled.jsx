import styled from 'styled-components';

export const CameraContainer = styled.div`
  position: relative;
  flex-grow: ${props => props.isOpen ? 2 : 0.5};
`;

export const CameraButton = styled.button`

  background: none;
  border: none;
  border-radius: 4px;
  font-size: 1em;
  color: #fff;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
`;

export const CameraScreen = styled.video`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 100%;
`;