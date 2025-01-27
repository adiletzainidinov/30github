import { BoxContainer, Container, StyledBox } from './homeStyle';
import LeftHome from './LeftHome';
import RightHome from './RightHome';

const Home = () => {
  return (
    <>
      <Container id='home'>
        <StyledBox>
          <BoxContainer>
            <LeftHome />
            <RightHome />
          </BoxContainer>
        </StyledBox>
      </Container>
    </>
  );
};

export default Home;
