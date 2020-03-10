import styled from 'styled-components';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const StyledSinglePostWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 300px;
`;
const StyledSinglePost = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 680px;
`;
const StyledSinglePostHeader = styled.div`
  background: #F2CB05;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  h1 {
    color: #333644;
    text-shadow: none;
  }
`;

const SinglePostLayout = ({ children }) => (
  <>
    <Header />

    <StyledSinglePostHeader>
      <h1>Single Post View</h1>
    </StyledSinglePostHeader>

    <StyledSinglePostWrapper>
      <StyledSinglePost>{children}</StyledSinglePost>
    </StyledSinglePostWrapper>
    <Footer></Footer>
  </>
);

export default SinglePostLayout;
