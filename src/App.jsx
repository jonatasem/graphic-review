import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import './styles/App.scss';

import { comments } from "./service/api"; // Importa os dados

function App() {

    //Estado para os filtros
    const [filters, setFilters] = useState({
        unidad: "",
        professional: "",
        rating: ""
    });

    // Função que aplica os filtros
    const filteredComments = comments.filter(comment => {
        const matchesUnidad = filters.unidad ? comment.unidad === filters.unidad : true;
        const matchesProfessional = filters.professional ? comment.professional === filters.professional : true;
        const matchesRating = filters.rating ? comment.rating === filters.rating : true;
        
        return matchesUnidad && matchesProfessional && matchesRating;
    });

    return (
        <>
            <Header setFilters={setFilters} />
            <Dashboard comments={filteredComments} />
            <Footer comments={filteredComments} />
        </>
    );
}

export default App;