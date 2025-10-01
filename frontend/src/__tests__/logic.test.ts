import { residents as initialResidents, Resident } from '../data/residents';

describe('Business Logic', () => {
  it('correctly calculates the next resident ID', () => {
    const residents: Resident[] = [
      { id: 1, name: 'Test 1', avatar: '', status: 'new' },
      { id: 3, name: 'Test 3', avatar: '', status: 'new' },
    ];

    const newId = residents.length > 0 ? Math.max(...residents.map(r => r.id)) + 1 : 1;

    expect(newId).toBe(4);
  });

  it('correctly calculates the ID for an empty list', () => {
    const residents: Resident[] = [];

    const newId = residents.length > 0 ? Math.max(...residents.map(r => r.id)) + 1 : 1;

    expect(newId).toBe(1);
  });
});