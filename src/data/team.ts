import type { TeamMemberData } from '@/types/content';
import naliniImg from '@/assets/images/nalini.png';
import vinayImg from '@/assets/images/vinay.png';

export const team: TeamMemberData[] = [
  {
    id: 'nalini-srivastava',
    name: 'Mrs. Nalini Srivastava',
    role: 'Managing Director',
    bio: 'Mrs. Nalini Srivastava brings over a decade of leadership experience in the verification and investigation industry. With a dual Master\'s degree and a deep understanding of operational excellence, she has been instrumental in shaping KLAUD HUNTER into a trusted name in the verification sector. Her strategic vision and commitment to quality have driven the company\'s growth across 11+ states.',
    image: naliniImg,
    qualifications: ['Dual MA', 'Certified Investigation Professional'],
    experience: '10+ Years',
    executive: true,
    order: 1,
  },
  {
    id: 'vinay-srivastava',
    name: 'Mr. Vinay Kumar Srivastava',
    role: 'Director',
    bio: 'Mr. Vinay Kumar Srivastava is a seasoned professional with over 25 years of experience in verification, investigation, and risk management. Holding an MBA in HR & Marketing, he brings unparalleled expertise in building client relationships and delivering operational excellence. His leadership has been pivotal in establishing KLAUD HUNTER as a preferred partner for BFSI clients.',
    image: vinayImg,
    qualifications: ['MBA - HR & Marketing', 'Certified Risk Management Professional'],
    experience: '25+ Years',
    executive: true,
    order: 2,
  },
];
