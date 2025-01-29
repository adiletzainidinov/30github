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
          <Img3D style={{marginTop: 130}} src={'https://i.pinimg.com/736x/58/76/9b/58769b2d037914c8aa974ff9e0eeb5e1.jpg'} alt="mekkeImgGorod" /> 
          <FloatingDecor3 /> 
          <FloatingDecor4 /> 
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
