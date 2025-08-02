import { useState } from 'react';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Header({ setFilters }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleFilterChange = (filterName, value) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterName]: value
        }));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                {isMenuOpen ? (
                    <FaXmark className="icon" onClick={toggleMenu} />
                ) : (
                    <FaBars className="icon" onClick={toggleMenu} />
                )}
            </article>

            {isMenuOpen && (
                <div className={`mobile-menu-container ${isMenuOpen ? 'open' : ''}`}>
                    <nav className="mobile-nav-bar">

                        <select onChange={(e) => { handleFilterChange('unidad', e.target.value); toggleMenu(); }}>
                            <option key="mobile-unidad-all" value="">Unidades</option>
                            <option key="mobile-unidad-a" value="Unidade A">Unidade A</option>
                            <option key="mobile-unidad-b" value="Unidade B">Unidade B</option>
                            <option key="mobile-unidad-c" value="Unidade C">Unidade C</option>
                        </select>

                        <select onChange={(e) => { handleFilterChange('professional', e.target.value); toggleMenu(); }}>
                            <option key="mobile-prof-all" value="">Profissionais</option>
                            <option key="mobile-prof-maria" value="Maria Silva">Maria Silva</option>
                            <option key="mobile-prof-joao" value="João Pereira">João Pereira</option>
                            <option key="mobile-prof-ana" value="Ana Costa">Ana Costa</option>
                            <option key="mobile-prof-carlos" value="Carlos Oliveira">Carlos Oliveira</option>
                            <option key="mobile-prof-fernanda" value="Fernanda Santos">Fernanda Santos</option>
                            <option key="mobile-prof-ricardo" value="Ricardo Almeida">Ricardo Almeida</option>
                        </select>

                        <select onChange={(e) => { handleFilterChange('rating', e.target.value); toggleMenu(); }}>
                            <option key="mobile-rating-all" value="">Notas</option>
                            <option key="mobile-rating-5" value="5">5.0</option>
                            <option key="mobile-rating-4" value="4">4.0</option>
                            <option key="mobile-rating-3" value="3">3.0</option>
                            <option key="mobile-rating-2" value="2">2.0</option>
                            <option key="mobile-rating-1" value="1">1.0</option>
                            <option key="mobile-rating-na" value="N. A">Não Avaliaram</option>
                        </select>

                    </nav>
                </div>
            )}
        </header>
    );
}