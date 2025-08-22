import NavMenu from './components/navmenu';
import Home from './pages/home';
import Contact from './pages/contact';
import InteractiveList from './components/InteractiveList';
import './App.css';

function App() {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="app">
      <NavMenu onNavigate={handleNavigation} />

      <main className="main-content">
        <Home />
        <Contact />

        <section className="list-section">
          <div className="list-section-container">
            <InteractiveList />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
