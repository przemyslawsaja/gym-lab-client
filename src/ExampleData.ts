import userImage from './assets/img/exampleImg.jpg';
import jmpressIMG from './assets/img/jm-press.jpg'
import dumbellKickbackIMG from './assets/img/dumbell-kickback.jpg'
import seatedTricepsIMG from './assets/img/seated-triceps.png'
import exerciseIMG from './assets/img/exercise.jpg'
export const Data = {
  'UserTrainings': [
    {id: '1', name: 'triceps', duration: 45, type: 'strength', exercises: [
      {id: 'e1', name: 'Triceps dip', equipmentType: 'Body only', img: jmpressIMG},
      {id: 'e2', name: 'Triceps dumbbel KickBack', equipmentType: 'Dumbell', img: dumbellKickbackIMG},
      {id: 'e3', name: 'Seated triceps press', equipmentType: 'Dumbell', img: seatedTricepsIMG},
      {id: 'e4', name: 'JM Press', equipmentType: 'Barbell', img: jmpressIMG},
      {id: 'e5', name: 'Dumbell extensions', equipmentType: 'Barbell', img: exerciseIMG},
    ], notes: [
      { title: 'Note 1', text: 'Note triceps training 1', date: 'Dec 8, 2020' },
      { title: 'Note 2', text: 'Note triceps training 2', date: 'Dec 11, 2020' },
      { title: 'Note 3', text: 'Note triceps training 3', date: 'Dec 13, 2020' },
    ]},
    {id: '2', name: 'Chest', duration: 20, type: 'strength', exercises: [
      {id: 'e5', name: 'Benchpress', equipmentType: 'Barbell', img: exerciseIMG},
      {id: 'e6', name: 'Hammer curl', equipmentType: 'Dumbell', img: exerciseIMG},
    ], notes: [
      { title: 'Note 2', text: 'Note chest and biceps training', date: 'Dec 11, 2020' },
    ]},
    {id: '3', name: 'Cardio', duration: 50, type: 'cardio', exercises: [
      {id: 'e7', name: 'Running - 30min', equipmentType: 'Body only', img: exerciseIMG},
      {id: 'e8', name: 'Boxing - 20min', equipmentType: 'Boxing bag', img: exerciseIMG},
    ], notes: [
      { title: 'Note 1', text: 'Note cardio training 1', date: 'Dec 11, 2020' },
      { title: 'Note 2', text: 'Note cardio training 2', date: 'Dec 12, 2020' },
      { title: 'Note 3', text: 'Note cardio training 3', date: 'Dec 12, 2020' },
      { title: 'Note 4', text: 'Note cardio training 4', date: 'Dec 13, 2020' },
    ]},
    {id: '4', name: 'Push', duration: 40, type: 'push', exercises: [
      {id: 'e1', name: 'Benchpress', equipmentType: 'Body only', img: exerciseIMG},
      {id: 'e1', name: 'Ohp', equipmentType: 'Dumbell', img: exerciseIMG},
      {id: 'e1', name: 'Seated triceps press', equipmentType: 'Dumbell', img: exerciseIMG},
      {id: 'e1', name: 'JM Press', equipmentType: 'Barbell', img: exerciseIMG},
    ], notes: [
      { title: 'Note 1', text: 'Note push training 1', date: 'Dec 13, 2020' },
      { title: 'Note 2', text: 'Note push training 2', date: 'Dec 18, 2020' },
    ]},
    {id: '5', name: 'Pull', duration: 40, type: 'push', exercises: [
      {id: 'e1', name: 'Deadlift', equipmentType: 'Barbell', img: exerciseIMG},
      {id: 'e1', name: 'Triceps dumbbel KickBack', equipmentType: 'Dumbell', img: exerciseIMG},
      {id: 'e1', name: 'Seated triceps press', equipmentType: 'Dumbell', img: exerciseIMG},
      {id: 'e1', name: 'JM Press', equipmentType: 'Barbell', img: exerciseIMG},
    ], notes: [
      { title: 'Note 1', text: 'Note pull training', date: 'Dec 14, 2020' },
    ]},
  ],
  'Exercises': [
    { 
      id: 'e1', 
      name: 'Triceps Dip', 
      equipmentType: 'Body only', 
      img: jmpressIMG, 
      difficulty: 'beginner', 
      exerciseType: 'Powerlifting', 
      musclesEnvolved: [
        {name: 'Chest'},
      ]
    },
    {
      id: 'e2', 
      name: 'Triceps dumbbel KickBack', 
      equipmentType: 'Dumbell', 
      img: dumbellKickbackIMG,
      difficulty: 'intermediate', 
      exerciseType: 'Powerlifting', 
      musclesEnvolved: [
        {name: 'Triceps'},
      ]
    },
    {
      id: 'e3', 
      name: 'Seated triceps press', 
      equipmentType: 'Dumbell', 
      img: seatedTricepsIMG,
      difficulty: 'expert', 
      exerciseType: 'Powerlifting', 
      musclesEnvolved: [
        {name: 'Triceps'}
      ]
    },
    {
      id: 'e4', 
      name: 'JM Press', 
      equipmentType: 'Barbell', 
      img: jmpressIMG,
      difficulty: 'beginner', 
      exerciseType: 'Powerlifting', 
      musclesEnvolved: [
        {name: 'Chest'}
      ]
    },
    {
      id: 'e5', 
      name: 'Dumbell extensions', 
      equipmentType: 'Barbell', 
      img: exerciseIMG,
      difficulty: 'intermediate', 
      exerciseType: 'Powerlifting', 
      musclesEnvolved: [
        {name: 'Chest'}
      ]
    },
  ],
  'UserDetailsAccount': {
    profileImage: userImage,
    name: 'Jan Kowalski',
    weight: '90 kg',
    height: '188 cm',
    age: '23',
    gender: 'Man',
  },
  'UserDetailsEditAccount': {
    profileImage: userImage,
    name: 'Jan Kowalski',
    weight: '90 kg',
    height: '188 cm',
    age: '23',
    gender: 'Man',
    email: 'sampleEmail@example.com',
  },
  'UserDetailsHome': {
    profileImage: userImage,
    firstName: 'Jan', 
  }
}