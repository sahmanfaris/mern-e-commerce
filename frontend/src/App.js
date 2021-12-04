import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Bismillah</h1>
          <Route path="/product/:id" component={Product} />
          <Route exact path="/" component={Homepage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
