import styled from 'styled-components'
// import img from './A:/disnep/hotstar-clone/public/images/login-background.jpg';


const Login = (props) => {
    return (
        <Container>
        <Content>
          <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" alt=''/>
            <SignUp>GET ALL THERE</SignUp>
            <Description>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ripsum, dolorem iure, 
               labore quisquam perspiciatis nobis maxime aliquam cumque deleniti.</Description>
               <CTALogoTwo src="/images/cta-logo-two.png" alt=''/>
          </CTA>
         <Bgimage />
        </Content>
        </Container>
    );
};

const Container = styled.section`
overflow:hidden;
display: flex;
flex-direction:column;
text-align:center;
height:100vh;
`;
const Content = styled.div`

margin-bottom:100vw;
width:100%;
position :relative;
min-height:100vh;
box-sizing:border-box;
display: flex;
justify-content:center;
align-items: center;
flex-direction:column;
padding: 80px 40px;
height: 100%;
`;

const Bgimage = styled.div`
height: 100%;
background-position: top;
background-size:cover;
background-repeat: no-repeat;
background:linear-gradient(to top, #3204fdba, #0b182b), url("https://assets.nflxext.com/ffe/siteui/vlv3/8f12b4f0-a894-4d5b-9c36-5ba391c63fbe/44355e66-dbf8-4dd8-ba6b-8e9e32ec6abd/IN-en-20230320-popsignuptwoweeks-perspective_alpha_website_large.jpg");
background-color:red;
position:absolute;
top:0;
right:0;
left:0;
z-index: -1;


`;

const CTA=styled.div`
max-width:650px;
display: flex;
flex-direction:column;
width: 100%;

`;
const CTALogoOne = styled.img`
margin-bottom:12px;
max-width: 600px;
min-height:1px;
display: block;
width: 100%;
`;

const SignUp =styled.a`
font-weight:bold;
color:#f9f9f9;
background-color:#0063e5 ;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding: 16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover {
  background-color:#0483ee ;
}
`;
const Description =styled.p`
color:hsla(0,0,95.3%,1);
font-size:11px;
margin: 0 0 24px;
line-height:1.5;
letter-spacing:1.5px;
`;

const CTALogoTwo =styled.img`
margin-bottom:20px;
max-width: 600px;
min-height:1px;
display:inline-block;
width: 100%;
`;


export default Login;