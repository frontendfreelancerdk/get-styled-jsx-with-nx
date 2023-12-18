import styles from "./app.jsx.scss";

console.log({styles})

export function App() {
  return (
    <>
      <h1>Hello Frontend freelancer!</h1>
      <p>
         <a  className={'text'} href={'https://frontend-freelancer.dk'}>Visit Frontend freelancer for awesome web development </a>
      </p>
      <style jsx>{styles}</style>
    </>
  );
}

export default App;

