import React from 'react';
import '../styles/footer.css';

export default function Footer(): JSX.Element {
    return (
        <>
            <footer className="footer">
                © {new Date().getFullYear()} <a href="https://timothyakinyelu.herokuapp.com/">loverofMush</a>
            </footer>
        </>
    );
}