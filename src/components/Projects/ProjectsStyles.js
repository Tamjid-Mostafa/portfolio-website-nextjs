import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
		transition: 0.25s;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
  margin-bottom: 5rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  /* border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px; */
  position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 375px;
	height: 667px;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	overflow: hidden;
	&:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		img {
			transform: scale(1.25);
		}
		figcaption {
			bottom: 0;
      height: 65%;
		}
	}
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.figcaption`
  width: 100%;
  position: absolute;
		bottom: -33%;
		left: 0;
		height: 50%;
		margin: 0;
		padding: 4rem 2rem;
		background-color: rgba(0,0,0,0.85);
		box-shadow: 0 0 20px rgba(0,0,0,0.4);
		color: white;
		line-height: 1;
		transition: 0.25s;

`;


export const HeaderOne = styled.h1`
  position: absolute;
  background-color: rgba(0,0,0,0.05);
		box-shadow: 0 0 50px rgba(0,0,0,0.4);
    border-radius: 30px;
    padding: 2rem;
		top: 50px;
		left: 20px;
		margin: 0;
		color: white;
		font-size: 60px;
		font-weight: 100;
		line-height: 1;
  /* font-size: ${(props) => props.title ? '3rem' : '2rem'}; */
`;
export const HeaderThree = styled.h3`
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
  padding: 0.5rem 0;
  font-size: 3rem;
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 0px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: ${(props) => props.spacebetween ? "space-between" : ""};
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color: #fff;
font-size: 1.6rem;
margin: ${(props) => props.spacebetween ? "0" : "0 2rem 0 0"};
padding:1rem 1.5rem;
background: #B133FF;
border-radius: 15px;
transition: 0.5s ease;
&:hover{
  background: linear-gradient(270deg, #ff622e 0%, #B133FF 100%);
}
`;
export const DetailsButton = styled.button`
position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 10px 0 0;
			padding: 1rem 2rem;
			background-color: #00DBD8;
			border: none;
			border-radius: 5px;
			color: #fff;
			font-size: 14px;
      cursor: pointer;
`;


export const TagList = styled.ul`
display: flex;
justify-content: space-between;
padding: 2rem 0;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`;

export const Card = styled.div`
position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 375px;
	height: 667px;
	border-radius: 10px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	overflow: hidden;
	&:hover {
		box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
		img {
			transform: scale(1.25);
		}
		figcaption {
			bottom: 0;
		}
	}
	
	img {
		height: 100%;
		transition: 0.25s;
	}
	figcaption {
		position: absolute;
		bottom: -33%;
		left: 0;
		width: 100%;
		//height: 50%;
		margin: 0;
		padding: 30px;
		background-color: rgba(black,0.85);
		box-shadow: 0 0 20px rgba(black,0.4);
		color: white;
		line-height: 1;
		transition: 0.25s;
		h3 {
			margin: 0 0 20px;
			padding: 0;
		}
		p {
			font-size: 14px;
			line-height: 1.75;
		}
		button {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 10px 0 0;
			padding: 10px 30px;
			background-color: $color-2;
			border: none;
			border-radius: 5px;
			color: white;
			font-size: 14px;
		}
	}

`

export const SpinnerWrapper = styled.div`
height: 100vh;
 width: 100vw; 
 display: flex; 
 justify-content: center; 
 align-items: center; 
 position: fixed; 
 top: 0; 
 left: 0; 
 z-index: 10; 

`