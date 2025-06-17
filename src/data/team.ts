import { ITeamMember } from '../types';

export const teamMembers: ITeamMember[] = [
  // Faculty Coordinators
  {
    id: '1',
    name: 'Dr. Rennu',
    role: 'Convener',
    image:
      'https://media.licdn.com/dms/image/v2/C4D03AQHqjtIhk0im2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1662097625413?e=1755129600&v=beta&t=ta7d_Jfv7FaWiYLEMr5_ZFyaTjGjZ5qM-3v42D9V3rQ',
    email: 'rennu@krmangalam.edu.in',
    linkedin: 'https://www.linkedin.com/in/reenu-batra-092940188/',
  },
  {
    id: '2',
    name: 'Ms. Megha Sharma',
    role: 'Faculty Co-Convener',
    image:
      'https://media.licdn.com/dms/image/v2/C5103AQHm8ckVyVzQ6g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1550665983795?e=1755129600&v=beta&t=I6rzF64nNdEprhpORlMu9i5dW_tmlIbtftaxveI3dj8',
    email: 'megha.sharma@krmangalam.edu.in',
    linkedin: 'https://www.linkedin.com/in/megha-sharma-534a54145/',
  },

  // Core Team
  {
    id: '3',
    name: 'Prabhjot  Singh',
    role: 'Co-ordinator',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQEHuPkvwJeAAA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704528847384?e=1755129600&v=beta&t=XNG3MaTMw-kPnSyHN6ac44pykimJpZG7s2BdUqsu88U',
    email: '2301201127@krmu.edu.in',
    linkedin: 'https://www.linkedin.com/in/prabhjot-singh-18546b282/',
    github: 'https://github.com/',
  },
  {
    id: '4',
    name: 'Nirdesh Jain',
    role: 'co-ordinator',
    image:
      'https://media.licdn.com/dms/image/v2/D5603AQFIIeuVOP_zRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726936376057?e=1755734400&v=beta&t=RzZAOO1j7AoeUVFmXg-MdKqGK4Ao3HOtN_GyunBwB30',
    email: '2301420025@krmangalam.edu.in',
    linkedin: 'https://www.linkedin.com/in/nirdeshhjain/',
    github: 'https://github.com/',
  },
  {
    id: '4',
    name: 'Gazal Yadav',
    role: 'co-ordinator',
    image: '1',
    email: '@krmangalam.edu.in',
    linkedin: 'https://www.linkedin.com/in/gazal-yadav-5a33602a4/',
    github: 'https://github.com/',
  },
];

export const getTeamCategories = () => {
  return [
    'Faculty Coordinators',
    'Core Team',
    'Technical Team',
    'Event Management',
    'Design Team',
    'Content Team',
  ];
};
