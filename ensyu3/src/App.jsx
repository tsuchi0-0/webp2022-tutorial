import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
    return (
      <header className="hero is-success is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">The Legend of Zelda : amibo</h1>
            <p>5421008 土門広香　日本大学文理学部情報科学科 Webプログラミングの演習課題 </p>
          </div>
        </div>
      </header>
    );
  }
  
  
  function Image(props){
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image">
            <img src={props.src} alt="chara"/>
          </figure>
        </div>
      </div>
    );
  }

  function Loading() {
    return <p>Loading...</p>;
  }
  
  
  function Gallery(props) {
    const{urls}=props;
    if (urls == null) {
      return <Loading />;
    }
    return (
        <div className="columns is-vcentered is-multiline">
        {urls.map((url) => {
            return (
              <div key={url} className="column is-3">
                <Image src={url.image} />
              </div>
            );
          })}
      </div>
    );
  }
  
  function Form(props) {
    function handleSubmit(event) {
      event.preventDefault();
      const { chara } = event.target.elements;
      props.onFormSubmit(chara.value);
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <select name="chara" defaultValue="link">
                  <option value="link">link</option>
                  <option value="zelda">zelda</option>
                  <option value="ganondorf">ganondorf</option>
                  <option value="mipha">mipha</option>
                  <option value="daruk">daruk</option>
                  <option value="revali">revali</option>
                  <option value="urbosa">urbosa</option>
                </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-dark">
                Reload
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
  

  function Main() {
    const [urls, setUrls] = useState(null);
    useEffect(() => {
      fetchImages("link").then((urls) => {
        setUrls(urls);
      });
   }, []);
    function reloadImages(chara) {
      fetchImages(chara).then((urls) => {
         setUrls(urls);
      });
    }  
    return (
      <main>
        <section className="section">
          <div className="container">
            <Form onFormSubmit={reloadImages} />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <Gallery urls={urls} />
          </div>
        </section>
      </main>
    );
  }
  
  function Footer() {
    return (
      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <a href="https://www.amiiboapi.com/">Donate to amiboAPI</a>
          </p>
        </div>
      </footer>
    );
  }
  
  function App() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }

  export default App;