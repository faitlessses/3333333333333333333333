export type Resident = {
  id: number;
  name: string;
  avatar: string;
  status: 'new' | 'relocated' | 'under-supervision';
  birthDate?: string;
  notes?: string;
};

export const residents: Resident[] = [
  {
    id: 1,
    name: 'Иванов Иван',
    avatar: 'https://i.pravatar.cc/150?u=1',
    status: 'new',
    birthDate: '1990-05-15',
  },
  {
    id: 2,
    name: 'Петрова Мария',
    avatar: 'https://i.pravatar.cc/150?u=2',
    status: 'under-supervision',
    birthDate: '1985-11-20',
    notes: 'Нуждается в отдельной комнате',
  },
  {
    id: 3,
    name: 'Сидоров Алексей',
    avatar: 'https://i.pravatar.cc/150?u=3',
    status: 'relocated',
    birthDate: '2001-02-10',
  },
    {
    id: 4,
    name: 'Кузнецова Анна',
    avatar: 'https://i.pravatar.cc/150?u=4',
    status: 'new',
    birthDate: '1998-07-30',
    notes: 'Ребёнок',
  },
];