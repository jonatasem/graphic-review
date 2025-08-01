
// O componente recebe a rating como uma prop
export default function RatingComponent({ rating }) {
    // Função para renderizar as estrelas
    const renderStars = (currentRating) => {
        const totalStars = 5;
        const stars = [];

        // Adiciona estrelas preenchidas
        for (let i = 0; i < currentRating; i++) {
            stars.push(<span key={`check-${i}`} className="star star-filled">★</span>);
        }

        // Adiciona estrelas vazias
        for (let i = currentRating; i < totalStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star star-check">☆</span>);
        }

        return stars;
    };

    return (
        <div className="container-rating">
            {renderStars(rating)}
        </div>
    );
}