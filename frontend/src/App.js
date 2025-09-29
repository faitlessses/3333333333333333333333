import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    AppBar,
    Toolbar
} from '@mui/material';

// Настраиваем базовый URL для Axios
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', // URL нашего Django-бэкенда
});

function App() {
    const [residents, setResidents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        apiClient.get('/residents/')
            .then(response => {
                setResidents(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the residents!", error);
                setError("Не удалось загрузить данные. Убедитесь, что бэкенд-сервер запущен на порту 8000.");
            });
    }, []);

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Haven - Система управления жильцами
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Список жильцов
                </Typography>
                {error ? (
                    <Typography color="error">{error}</Typography>
                ) : (
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>ФИО (кириллица)</TableCell>
                                    <TableCell>Статус</TableCell>
                                    <TableCell>Пол</TableCell>
                                    <TableCell>Дата рождения</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {residents.map((resident) => (
                                    <TableRow key={resident.id}>
                                        <TableCell>{resident.full_name_cyrillic}</TableCell>
                                        <TableCell>{resident.status}</TableCell>
                                        <TableCell>{resident.gender === 'M' ? 'Мужской' : 'Женский'}</TableCell>
                                        <TableCell>{resident.birth_date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Container>
        </div>
    );
}

export default App;