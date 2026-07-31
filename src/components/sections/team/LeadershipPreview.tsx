import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/common/SectionHeading';
import { TeamMemberCard } from '@/components/common/TeamMemberCard';
import { team } from '@/data/team';

interface LeadershipPreviewProps {
  variant?: 'default' | 'dark';
}

export function LeadershipPreview({ variant = 'default' }: LeadershipPreviewProps) {
  const isDark = variant === 'dark';

  return (
    <Section id="leadership" dark={isDark}>
      <SectionHeading
        label="Leadership"
        title="Meet Our Leadership"
        subtitle="Experienced professionals dedicated to excellence in verification and investigation."
        light={isDark}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        {team.map((member) => (
          <TeamMemberCard
            key={member.id}
            name={member.name}
            role={member.role}
            bio={member.bio}
            image={member.image}
            qualifications={member.qualifications}
            experience={member.experience}
            executive={member.executive}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/leadership"
          className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-colors hover:text-secondary/80"
        >
          View Full Leadership Team
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </Section>
  );
}
