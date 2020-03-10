import styled from 'styled-components';

const StyledSocials = styled.footer`
  a {
    border: 1px solid white;
    padding: 0.75em;
    border-radius: 100%;
    line-height: 0;
  }
  a:hover {
    border-radius: 0;
    border: 1px solid transparent;
    border-bottom: 1px solid orange;
  }

  .icon {
    max-width: 16px;
  }

  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 1em auto;
  max-width: 90%;
  width: 400px;
`;

const Socials = () => {
  return (
    <>
      <StyledSocials>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/ijstodev"
        >
          <img src="/icon/twitter.png" alt="ijs-twitter" className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.youtube.com/channel/UCk54GuQ7ha-wvviMimD8i1w"
        >
          <img src="/icon/youtube.png" alt="ijs-youtube" className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/ijsto/"
        >
          <img src="/icon/instagram.png" alt="ijs-instagram" className="icon" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/IJS-349806719022014"
        >
          <img src="/icon/facebook.png" alt="ijs-facebook" className="icon" />
        </a>
        <a href="mailto:code@ijs.to">
          <img src="/icon/email.png" alt="ijs-email" className="icon" />
        </a>
      </StyledSocials>
    </>
  );
};

export default Socials;
