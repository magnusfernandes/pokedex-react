import styled from "styled-components";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

interface Props {
  children: React.ReactNode;
}

const Container = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}

export default Layout;
