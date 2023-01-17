import { useEffect, useState } from "react";
import { fetchImages } from "./api";

function Header() {
    return (
      <header className="hero is-success ">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">ゼルダの伝説 キャラクター画像</h1>
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
              <div key={url} className="column is-2">
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
                  <option value="link">LINK</option>
                  <option value="zelda">ZELDA</option>
                  <option value="mipha">MIPHA</option>
                  <option value="daruk">DARUK</option>
                  <option value="revali">REVALI</option>
                  <option value="urbosa">URBOSA</option>
                  <option value="midna">MIDNA</option>
                </select>
              </div>
            </div>
            <div className="control">
              <button type="submit" className="button is-success">
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
        <a href="index2.html" class="btn">キャラクター紹介</a>
          <p>
            このサイトは<a href="https://www.amiiboapi.com/">AmiiboAPI</a>を使用しています。
          </p>
          課題制作
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