import { BarChart as BChart, Bar, XAxis, YAxis,ResponsiveContainer } from 'recharts'
const BarChart = () => {
    const students = [
        { "id": 1, "student": "Alice", "mat-marks": 78, "biology-marks": 90 },
        { "id": 2, "student": "Bob", "mat-marks": 85, "biology-marks": 77 },
        { "id": 3, "student": "Charlie", "mat-marks": 67, "biology-marks": 68 },
        { "id": 4, "student": "David", "mat-marks": 90, "biology-marks": 84 },
        { "id": 5, "student": "Emma", "mat-marks": 74, "biology-marks": 76 },
        { "id": 6, "student": "Frank", "mat-marks": 88, "biology-marks": 90 },
        { "id": 7, "student": "Grace", "mat-marks": 92, "biology-marks": 75 },
        { "id": 8, "student": "Henry", "mat-marks": 65, "biology-marks": 96 },
        { "id": 9, "student": "Irene", "mat-marks": 80, "biology-marks": 80 },
        { "id": 10, "student": "Jack", "mat-marks": 76, "biology-marks": 70 }
    ];
    return (
        
         <ResponsiveContainer height="100%" width="100%">
         <BChart width={1000} height={500} data={students}>
                <XAxis dataKey="student"></XAxis>
                <YAxis dataKey="mat-marks"></YAxis>
                <Bar dataKey="mat-marks" fill='#8884d8' stroke='blue'></Bar>
            </BChart>
         </ResponsiveContainer>
        
    );
};

export default BarChart;