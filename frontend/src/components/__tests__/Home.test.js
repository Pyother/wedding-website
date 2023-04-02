import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import Home from '../Home.jsx';

test("Home component should contain ImageWithPlaceholder", () => {
    render(<Home/>);
    const imageWithPlaceholderElement = screen.getByTestId('image-with-placeholder');
    expect(imageWithPlaceholderElement).toBeInTheDocument();
});

test("Home component should contain iframe element with correct map pointer", () => {
    render(<Home/>);
    const iframeElement = screen.getByTestId('iframe');
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement.getAttribute('src')).toBe('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4794.657451332664!2d21.781786569486854!3d50.73779075078343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722b670fcc66eeb%3A0x23a4ce0291aa1b21!2sDw%C3%B3r%20Dwikozy%20Hotel%20Sandomierz!5e1!3m2!1spl!2spl!4v1677711265730!5m2!1spl!2spl');
});

test("Home component should be responsive", () => {
    render(<Home/>);
    const contentRightElement = screen.getByTestId('content-right');
    expect(contentRightElement).toBeInTheDocument();
})



