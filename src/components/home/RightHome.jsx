import { FloatingDecor, FloatingDecor2, FloatingDecor3, FloatingDecor4, Img3D, Img3DContainer, Img3DWrapper, RightContainer } from './homeStyle';


const RightHome = () => {
  return (
    <RightContainer>
      <Img3DContainer>
        <Img3DWrapper>
          <Img3D src={'https://i.pinimg.com/736x/2e/60/ef/2e60efedf913a784a8f731ee2412c15d.jpg'} alt="mekkeImg" /> 
          <FloatingDecor /> 
          <FloatingDecor2 /> 
        </Img3DWrapper>

        <Img3DWrapper>
          <Img3D style={{marginTop: 130}} src={'https://i.pinimg.com/736x/c1/cb/9f/c1cb9fe8e9788a206f8f3886d6d78039.jpg'} alt="mekkeImgGorod" /> 
          <FloatingDecor3 /> 
          <FloatingDecor4 /> 
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
