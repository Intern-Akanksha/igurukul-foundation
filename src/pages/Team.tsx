import { useLocation } from 'react-router-dom'
import ActaPageShell from '../components/ActaPageShell'
import Reveal from '../components/Reveal'
import TeamSection from '../components/TeamSection'
import { teamMembers } from '../data/team'

export default function Team() {
  const { hash } = useLocation()
  const selectedMember = hash ? teamMembers.find((member) => `#${member.id}` === hash) : undefined
  const membersToShow = selectedMember ? [selectedMember] : undefined

  return (
    <>
      <ActaPageShell
        eyebrow="Our Team"
        title={
          <>
            {selectedMember ? (
              <>
                Meet <span className="text-[var(--acta-terracotta)]">{selectedMember.name}</span>
              </>
            ) : (
              <>
                Meet the <span className="text-[var(--acta-terracotta)]">People</span> Behind iGurukul
              </>
            )}
          </>
        }
        lead={
          selectedMember
            ? `Explore the full profile of ${selectedMember.name}, ${selectedMember.role} at iGurukul Foundation.`
            : 'Explore the full profiles of the educators, founders, and board members who continue to guide iGurukul Foundation.'
        }
      >
        <Reveal className="mt-12">
          <p className="acta-body mx-auto max-w-3xl text-center">
            {selectedMember
              ? `${selectedMember.name}'s journey reflects service, leadership, and a strong commitment to preserving language, arts, and shared heritage.`
              : 'From cultural leadership to community service, each member brings experience, dedication, and a deep commitment to preserving language, arts, and shared heritage.'}
          </p>
        </Reveal>
      </ActaPageShell>
      <TeamSection members={membersToShow} />
    </>
  )
}
