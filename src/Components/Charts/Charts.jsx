import { LineChart, Line } from 'recharts';

const Charts = () => {
    const students = [
        { "id": 1, "student": "Alice", "marks": 78 },
        { "id": 2, "student": "Bob", "marks": 85 },
        { "id": 3, "student": "Charlie", "marks": 67 },
        { "id": 4, "student": "David", "marks": 90 },
        { "id": 5, "student": "Emma", "marks": 74 },
        { "id": 6, "student": "Frank", "marks": 88 },
        { "id": 7, "student": "Grace", "marks": 92 },
        { "id": 8, "student": "Henry", "marks": 65 },
        { "id": 9, "student": "Irene", "marks": 80 },
        { "id": 10, "student": "Jack", "marks": 76 }
    ];

    return (
        <div>
            <LineChart width={1000} height={500} data={students}>
                <Line></Line>
            </LineChart>
        </div>
    );
};

export default Charts;