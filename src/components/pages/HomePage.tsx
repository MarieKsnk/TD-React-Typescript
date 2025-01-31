import { Header } from "@organisms/Header";
import { Button } from "@atoms/Button";
import { Link } from "react-router-dom";
import "./globals.css"

export function HomePage() {

    return (
    <>
     <Header />
      <main>
        <h1 className="title">Bienvenu</h1>
        <Link to="/recettes">
          <Button label="Voir toutes les recettes" />
        </Link>
      </main>
    </>
    )
  }
  

  