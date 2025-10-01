"use client";

import { useState } from "react";
import ResidentCard from "@/components/ResidentCard";
import AddResidentModal from "@/components/AddResidentModal";
import { residents as initialResidents, Resident } from "@/data/residents";

export default function Home() {
  const [residents, setResidents] = useState<Resident[]>(initialResidents);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddResident = (newResidentData: Omit<Resident, 'id' | 'avatar'>) => {
    const newId = residents.length > 0 ? Math.max(...residents.map(r => r.id)) + 1 : 1;
    const newResident: Resident = {
      ...newResidentData,
      id: newId,
      avatar: `https://i.pravatar.cc/150?u=${newId}`, // Use a more stable ID for the avatar
    };
    setResidents([...residents, newResident]);
  };

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Жильцы
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {residents.map((resident) => (
          <ResidentCard key={resident.id} resident={resident} />
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white font-bold text-2xl w-16 h-16 rounded-full shadow-lg flex items-center justify-center"
      >
        +
      </button>

      <AddResidentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddResident={handleAddResident}
      />
    </main>
  );
}