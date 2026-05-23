import { createRoot } from 'react-dom/client';
import App from '@/app/App';
import './styles/index.css';

window.onload = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(anchor.getAttribute('href') || '')?.scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
};
createRoot(document.getElementById('root')!).render(<App />);
