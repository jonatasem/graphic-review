
export default function Header({ setFilters }) {

    // Função para atualizar o estado no componente pai (App)
    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    return (
        <header className='container-header'>
            <h1>Avaliações</h1>
            <article className="nav-bar">
                <nav>
                    <select onChange={(e) => handleFilterChange('unidad', e.target.value)}>
                        <option value="">Unidades</option>
                        <option value="Unidade A">Unidade A</option>
                        <option value="Unidade B">Unidade B</option>
                        <option value="Unidade C">Unidade C</option>
                    </select>
                    
                    <select onChange={(e) => handleFilterChange('professional', e.target.value)}>
                        <option value="">Profissionais</option>
                        <option value="Maria Silva">Maria Silva</option>
                        <option value="João Pereira">João Pereira</option>
                        <option value="Ana Costa">Ana Costa</option>
                        <option value="Carlos Oliveira">Carlos Oliveira</option>
                        <option value="Fernanda Santos">Fernanda Santos</option>
                        <option value="Ricardo Almeida">Ricardo Almeida</option>
                    </select>
                
                    <select onChange={(e) => handleFilterChange('rating', e.target.value)}>
                        <option value="">Notas</option>
                        <option value="5">5.0</option>
                        <option value="4">4.0</option>
                        <option value="3">3.0</option>
                        <option value="2">2.0</option>
                        <option value="1">1.0</option>
                        <option value="N. A">Não Avaliaram</option>
                    </select>
                </nav>
            </article>
            <article className="navbar-mobile">
                <p>icon</p>
            </article>
        </header>
    );
}