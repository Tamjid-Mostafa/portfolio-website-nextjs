
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "../layout/LayoutStyles";
import Theme from "../styles/theme";
import 'react-photo-view/dist/react-photo-view.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Container>
        <Header />
        <Component {...pageProps} />
        <Footer />
        </Container>
      </Theme>
    </>
  );
}
 