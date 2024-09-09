import { BoxContainer, Container, StyledBox } from './home';
import LeftHome from './LeftHome';
import RightHome from './RightHome';

const Home = () => {
  return (
    <>
      <Container>
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
