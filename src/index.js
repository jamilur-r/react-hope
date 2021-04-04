import styled from "styled-components";


// Layout components ---
export const Container = styled.div`
  width: 85%;
  margin: 0 auto;
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};

  @media (max-width: 430px){
    width: 90%;
  }
`

export const Box = styled.div`
  width: ${props => props.width ? props.width : '300px'};
  height: ${props => props.height ? props.height : 'auto'};
  background-color: ${props => props.bgColor ? props.bgColor : '#fff'};

`

export const Row = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  display: flex;
  flex-direction: row;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
`

export const Col = styled.div`
  width: ${props => props.width ? props.width : '100%'};
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: ${props => props.justify ? props.justify : 'center'};
`

export const GridBox = styled.div`
  width: ${props => props.width ? props.width : '300px'};
  height: ${props => props.height ? props.height : 'auto'};

  display: grid;
  grid-template-columns: ${props => props.cols && props.colSize ? `repeat(${props.cols}, ${props.colSize})`: 'repeat(4, 1fr)'};
  grid-template-rows: ${props => props.rows && props.rowSize ? `repeat(${props.rows}, ${props.rowSize})`: 'auto'};

`