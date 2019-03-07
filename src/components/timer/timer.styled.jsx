import styled from 'styled-components';

export const TimeBlockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  height:100%;
  flex-wrap: wrap;
  align-content: center;
`;

export const TimeBlock = styled.div`
  display: flex;
  font-size: 10em;
  color: #fff;
  align-self: flex-centre;
  flex-direction: columns;
  position: relative;
  display: flex;
`;

export const TimeOverBlock = styled.div`
  font-size: 5em;
  color: #fff;
  text-align: center;
`;

export const TimeNegativeBox = styled.div`
  position: absolute;
  left: 0.1em;
  top: 0.2em;
`;

export const TimeSetterInput = styled.input`
  width: 80%;
  border: none;
  border-bottom: 1px solid rgba(251,251,251,0.7);
  padding: .25em .25em;
  font-size: 1em;
  background: none;
  text-align: left;
  color: #fff;
  font-family: 'netto';
  flex: 3;

  &:first-child{
    text-align: right;
    flex: 1;
    min-width: 2em;
  }
`;

export const TotalTimeCounter = styled.div`
  font-size: 1em;
  font-family: 'netto';
  color: #fff;
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: absolute;
`;

export const TopContainerLeft = styled.div`
  position: relative;
  flex-grow: 3;
  height: 100%;
`
