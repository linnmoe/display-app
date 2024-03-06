import * as React from 'react';
import { useEffect, useState } from 'react';

interface Person {
  name: string;
  birthday: Date;
}

const Birthday: React.FC = () => {
  const [people, setPeople] = useState<Person[]>([]);

  useEffect(() => {
    // Initialize the state with the data
    setPeople([
      {
        name: "Kalle Anka",
        birthday: new Date("1990-05-15")
      },
      {
        name: "Musse Pigg",
        birthday: new Date("1985-12-28")
      },
      {
        name: "Albin Friedner",
        birthday: new Date("1978-07-02")
      }
    ]);
  }, []);

  const today = new Date();
  const upcomingBirthdays = people
    .map((person) => {
      const nextBirthday = new Date(today.getFullYear(), person.birthday.getMonth(), person.birthday.getDate());
      return { ...person, nextBirthday };
    })
    .filter((person) => person.nextBirthday >= today)
    .sort((a, b) => a.nextBirthday.getTime() - b.nextBirthday.getTime());

    const nextBirthday = upcomingBirthdays[0] || null;

  return (
    <div>
      {nextBirthday ? (
        <div>
        <p style={{fontSize: '25px'}}>
            {nextBirthday.nextBirthday.toLocaleDateString()}
        </p>
        <p style={{fontSize: '25px'}}>
            {nextBirthday.name}
        </p>
        </div>
      ) : (
        <p>Inga kommande födelsedagar inom 3 månader</p>
      )}
    </div>
  );
};

export default Birthday;
