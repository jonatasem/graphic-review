import { useState, useMemo, useEffect } from 'react';
import RatingComponent from './Rating';

export default function Footer({ comments }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedComment, setSelectedComment] = useState(null);
    const commentsPerPage = 3;

    // UseEffect para resetar a paginação quando a lista de comentários muda
    useEffect(() => {
        // Redefine currentIndex para 0 sempre que a prop 'comments' mudar
        setCurrentIndex(0);
    }, [comments]); 
    
    const displayedComments = useMemo(() => {
        return comments.slice(currentIndex, currentIndex + commentsPerPage);
    }, [comments, currentIndex, commentsPerPage]);

    const totalPages = useMemo(() => {
        return Math.ceil(comments.length / commentsPerPage);
    }, [comments, commentsPerPage]);

    const nextComments = () => {
        setCurrentIndex((prevIndex) => Math.min(prevIndex + commentsPerPage, comments.length - commentsPerPage));
    };

    const previousComments = () => {
        setCurrentIndex((prevIndex) => Math.max(prevIndex - commentsPerPage, 0));
    };

    const handleOpenPopup = (comment) => {
        setSelectedComment(comment);
    };

    const handleClosePopup = () => {
        setSelectedComment(null);
    };

    return (
        <footer className="container-footer">
            <table border="1" className='table-desktop'>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Contato</th>
                        <th>Avaliação</th>
                        <th>Profissional</th>
                        <th>Unidade</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedComments.map((comment, index) => (
                        <tr key={index}>
                            <td>{comment.date}</td>
                            <td>{comment.contact}</td>
                            <td>
                                <RatingComponent rating={comment.rating} />
                            </td>
                            <td>{comment.professional}</td>
                            <td>{comment.unidad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table border="1" className="table-mobile">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Avaliação</th>
                        <th>Ver mais</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedComments.map((comment, index) => (
                        <tr key={index}>
                            <td>{comment.date}</td>
                            <td>
                                <RatingComponent rating={comment.rating} />
                            </td>
                            <td>
                                <button onClick={() => handleOpenPopup(comment)}>Detalhes</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="page-control">
                <button onClick={previousComments} disabled={currentIndex === 0} aria-label="Mostrar comentários anteriores">
                    Anterior
                </button>
                <button onClick={nextComments} disabled={currentIndex + commentsPerPage >= comments.length} aria-label="Mostrar próximos comentários">
                    Próximo
                </button>
            </div>
            <div className='number-page'>
                Página {Math.floor(currentIndex / commentsPerPage) + 1} de {totalPages || 1}
            </div>

            {selectedComment && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button onClick={handleClosePopup} className="close-button">X</button>
                        <h3>Detalhes do Comentário</h3>
                        <p><strong>Data:</strong> {selectedComment.date}</p>
                        <p><strong>Contato:</strong> {selectedComment.contact}</p>
                        <p><strong>Profissional:</strong> {selectedComment.professional}</p>
                        <p><strong>Unidade:</strong> {selectedComment.unidad}</p>
                        <p><strong>Avaliação:</strong> <RatingComponent rating={selectedComment.rating} /></p>
                    </div>
                </div>
            )}
        </footer>
    );
}
