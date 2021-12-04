import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Bismillah</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default App;
