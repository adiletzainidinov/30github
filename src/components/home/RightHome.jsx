import { FloatingDecor, FloatingDecor2, FloatingDecor3, FloatingDecor4, Img3D, Img3DContainer, Img3DWrapper, RightContainer } from './homeStyle';


const RightHome = () => {
  return (
    <RightContainer>
      <Img3DContainer>
        <Img3DWrapper>
          <Img3D src={'https://i.pinimg.com/736x/24/03/13/240313d5cb0c1184e77e313ded695a23.jpg'} alt="mekkeImg" /> 
          <FloatingDecor /> 
          <FloatingDecor2 /> 
        </Img3DWrapper>

        <Img3DWrapper>
          <Img3D style={{marginTop: 130}} src={'https://i.pinimg.com/736x/2b/fd/26/2bfd26cca83000695e5b4d40f8fb4183.jpg'} alt="mekkeImgGorod" /> 
          <FloatingDecor3 /> 
          <FloatingDecor4 /> 
        </Img3DWrapper>
      </Img3DContainer>
    </RightContainer>
  );
};

export default RightHome;
