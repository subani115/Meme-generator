// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`
export const SubmitButton = styled.div`
  display: ${props => (!props.formSubmitted ? 'none' : null)};
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  height: 50vh;
  width: 40%;
`
export const TopHeading = styled.p`
  font-size: ${props => props.fontSize}px;
  color: white;
`
