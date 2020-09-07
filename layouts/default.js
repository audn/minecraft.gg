import Header from '../components/header';
import Footer from '../components/footer';

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen bg-discord-body text-discord-600">
      <Header data={props} />
      <main className="flex-1">{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
