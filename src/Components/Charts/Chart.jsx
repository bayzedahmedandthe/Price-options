
import { LineChart, Line, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const marks = [{ "name": "Alice Johnson", "id": 1, "math_marks": 85, "biology_marks": 90 },
    { "name": "Bob Smith", "id": 2, "math_marks": 78, "biology_marks": 54 },
    { "name": "Charlie Davis", "id": 3, "math_marks": 92, "biology_marks": 81 },
    { "name": "Diana Evans", "id": 4, "math_marks": 43, "biology_marks": 85 },
    { "name": "Ethan Brown", "id": 5, "math_marks": 75, "biology_marks": 55 }]


    return (
        <div className='pt-20'>
            <LineChart width={1000} height={500} data={marks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="math_marks"></YAxis>
                <Line dataKey="math_marks" stroke='blue'></Line>
                <Line dataKey="biology_marks" stroke='black'></Line>
            </LineChart>
        </div>
    );
};

export default Chart;