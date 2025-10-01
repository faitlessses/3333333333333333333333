import React from 'react';
import Image from 'next/image';
import { Resident } from '@/data/residents';

type ResidentCardProps = {
  resident: Resident;
};

const statusColors = {
  new: 'bg-green-500',
  'under-supervision': 'bg-yellow-500',
  relocated: 'bg-gray-500',
};

const statusTranslations = {
  new: 'Новый',
  'under-supervision': 'Под наблюдением',
  relocated: 'Переселён',
}

const ResidentCard: React.FC<ResidentCardProps> = ({ resident }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-center h-full">
      <Image
        src={resident.avatar}
        alt={resident.name}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{resident.name}</h3>
      <div className="mt-2 mb-4">
        <span
          className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${
            statusColors[resident.status]
          }`}
        >
          {statusTranslations[resident.status]}
        </span>
      </div>
      <div className="text-left w-full mt-auto">
        {resident.birthDate && (
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <strong>ДР:</strong> {resident.birthDate}
          </p>
        )}
        {resident.notes && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            <strong>Заметка:</strong> {resident.notes}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResidentCard;