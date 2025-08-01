import { useMemo } from "react";
import Chart from "react-apexcharts";
import 'font-awesome/css/font-awesome.min.css';
import RatingComponent from "../components/Rating";

export default function Dashboard({ comments }){
    const chartData = useMemo(() => {
        const ratingsCount = [0, 0, 0, 0, 0];
        let notRatedCount = 0;

        comments.forEach(comment => {
            const rating = parseInt(comment.rating);
            if (rating >= 1 && rating <= 5) {
                ratingsCount[rating - 1] += 1;
            } else {
                notRatedCount += 1;
            }
        });

        return {
            series: [{
                name: "Avaliações",
                data: [...ratingsCount, notRatedCount]
            }],
            categories: ["1", "2", "3", "4", "5", "N.A."]
        };
    }, [comments]);

    const chartOptions = {
        chart: {
            id: "basic-bar",
        },
        xaxis: {
            categories: chartData.categories
        },
        plotOptions: {
            bar: {
                horizontal: true
            },
        },
        colors: ["#ffa500"]
    };

    return (
        <main className="container-main">
            <article className="avaliation-list">
                <h2>{comments.length} Avaliações</h2>
                <ul>
                    {[5, 4, 3, 2, 1].map(rating => (
                        <li key={rating}>
                            <strong>{rating}.0</strong>
                            <RatingComponent rating={rating} />
                        </li>
                    ))}
                    <li className="no-assessment">
                        <strong>Não Avaliaram</strong>
                    </li>
                </ul>
            </article>
            <article className="avaliation-graphic">
                <Chart
                    className="chart"
                    options={chartOptions}
                    series={chartData.series}
                    type="bar"
                    width="100%"
                    height="330"
                />
            </article>
        </main>
    );
};
